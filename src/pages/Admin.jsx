import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { DndContext, closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, rectSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { client, urlFor } from '../sanity';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

// Sortable Image Item Component
const SortableItem = ({ id, image, onRemove, index, isSelected, onToggleSelect }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`relative group aspect-[3/4] rounded-sm overflow-hidden border cursor-move transition-all ${isSelected ? 'border-[#5B0A1A] ring-2 ring-[#5B0A1A] ring-opacity-50' : 'border-gray-100 bg-gray-50'}`}>
            <img
                src={image.asset ? urlFor(image).width(300).url() : image.preview}
                alt="Product"
                className={`w-full h-full object-cover ${isSelected ? 'opacity-80' : ''}`}
            />
            {/* Index Badge */}
            <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
                #{index + 1}
            </div>

            {/* Checkbox for Selection */}
            <div
                className="absolute bottom-2 left-2 z-10"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleSelect(id)}
                    className="w-5 h-5 accent-[#5B0A1A] cursor-pointer"
                />
            </div>

            {/* Individual Delete Button */}
            <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                title="Delete Image"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    );
};

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    // Sensors for Drag and Drop
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    // Fetch images from Sanity
    const fetchImages = async () => {
        try {
            if (!import.meta.env.VITE_SANITY_PROJECT_ID) {
                toast.error("MISSING CONFIG: Sanity Project ID not found.");
                return;
            }

            // CHANGED: Using 'galleryImage' instead of 'product'
            const query = `*[_type == "galleryImage"] | order(order asc) {
                _id,
                image {
                    asset,
                    crop,
                    hotspot
                },
                order
            }`;
            const data = await client.fetch(query);
            setImages(data.map(item => ({ ...item, id: item._id })));
        } catch (err) {
            console.error("Failed to fetch images:", err);
            toast.error("Connection Failed. Check your Internet or API keys.");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (pin === '1234') {
            setIsAuthenticated(true);
            const loadToast = toast.loading('Connecting to Sanity...');
            await fetchImages();
            toast.dismiss(loadToast);
        } else {
            toast.error('Incorrect PIN');
        }
    };

    // Handle File Upload
    const onDrop = async (acceptedFiles) => {
        if (acceptedFiles.length === 0) return;

        setUploading(true);
        const uploadToast = toast.loading(`Uploading ${acceptedFiles.length} images...`);

        try {
            let successCount = 0;

            for (const file of acceptedFiles) {
                try {
                    const asset = await client.assets.upload('image', file);

                    // CHANGED: Creating 'galleryImage'
                    const newDoc = {
                        _type: 'galleryImage',
                        image: {
                            _type: 'image',
                            asset: {
                                _type: 'reference',
                                _ref: asset._id
                            }
                        },
                        order: images.length + 1,
                        createdAt: new Date().toISOString()
                    };

                    await client.create(newDoc);
                    successCount++;
                } catch (innerErr) {
                    console.error("Single file upload failed", innerErr);
                }
            }

            await fetchImages();

            if (successCount === acceptedFiles.length) {
                toast.success("All images uploaded successfully!");
            } else if (successCount > 0) {
                toast.warning(`Uploaded ${successCount}/${acceptedFiles.length} images. Some failed.`);
            } else {
                throw new Error("All uploads failed");
            }

        } catch (err) {
            console.error(err);
            toast.error('Upload Failed. Check permissions or network.');
        } finally {
            toast.dismiss(uploadToast);
            setUploading(false);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { 'image/*': [] } });

    // Handle Individual Delete
    const handleRemove = async (id) => {
        if (!window.confirm("Permanently delete this image?")) return;

        const deleteToast = toast.loading("Deleting...");
        const img = images.find(i => i.id === id);

        try {
            await client.delete(id);
            setImages(images.filter(item => item.id !== id));
            setSelectedImages(selectedImages.filter(sid => sid !== id));

            if (img?.image?.asset?._ref) {
                client.delete(img.image.asset._ref).catch(err => console.warn("Asset orphan:", err));
            }

            toast.success("Image deleted successfully");
        } catch (err) {
            console.error(err);
            toast.error("Delete failed. Please try again.");
        } finally {
            toast.dismiss(deleteToast);
        }
    };

    // Toggle Selection
    const toggleSelect = (id) => {
        if (selectedImages.includes(id)) {
            setSelectedImages(selectedImages.filter(sid => sid !== id));
        } else {
            setSelectedImages([...selectedImages, id]);
        }
    };

    // Select/Deselect All
    const toggleSelectAll = () => {
        if (selectedImages.length === images.length) {
            setSelectedImages([]);
        } else {
            setSelectedImages(images.map(img => img.id));
        }
    };

    // Handle Bulk Delete
    const deleteSelected = async () => {
        toast((t) => (
            <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-red-600">
                    ⚠️ Permanently delete {selectedImages.length} selected image{selectedImages.length > 1 ? 's' : ''}?
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={async () => {
                            toast.dismiss(t.id);

                            setIsDeleting(true);
                            const bulkToast = toast.loading("Deleting images...");

                            try {
                                const idsToDelete = [...selectedImages];

                                const transaction = client.transaction();
                                idsToDelete.forEach(id => transaction.delete(id));
                                await transaction.commit();

                                const assetsToDelete = images
                                    .filter(img => idsToDelete.includes(img.id))
                                    .map(img => img.image?.asset?._ref)
                                    .filter(Boolean);

                                if (assetsToDelete.length > 0) {
                                    const assetTransaction = client.transaction();
                                    assetsToDelete.forEach(assetId =>
                                        assetTransaction.delete(assetId)
                                    );
                                    assetTransaction
                                        .commit()
                                        .catch(err =>
                                            console.warn("Bulk asset cleanup warning:", err)
                                        );
                                }

                                setImages(images.filter(img => !idsToDelete.includes(img.id)));
                                setSelectedImages([]);
                                toast.success("Selected images deleted.");
                            } catch (err) {
                                console.error(err);
                                toast.error("Bulk delete failed.");
                            } finally {
                                toast.dismiss(bulkToast);
                                setIsDeleting(false);
                            }
                        }}
                        className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        ), { duration: Infinity });
    };


    // Handle Delete ALL
    const deleteAll = async () => {
        toast((t) => (
            <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-red-600">
                    ⚠️ This will wipe your entire collection. Are you sure?
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={async () => {
                            toast.dismiss(t.id);

                            setIsDeleting(true);
                            const wipeToast = toast.loading("Wiping collection...");

                            try {
                                const transaction = client.transaction();
                                images.forEach(img => transaction.delete(img.id));
                                await transaction.commit();

                                const assetsToDelete = images
                                    .map(img => img.image?.asset?._ref)
                                    .filter(Boolean);

                                if (assetsToDelete.length > 0) {
                                    const assetTransaction = client.transaction();
                                    assetsToDelete.forEach(assetId =>
                                        assetTransaction.delete(assetId)
                                    );
                                    assetTransaction
                                        .commit()
                                        .catch(err =>
                                            console.warn("Full wipe asset cleanup warning:", err)
                                        );
                                }

                                setImages([]);
                                setSelectedImages([]);
                                toast.success("Collection completely cleared.");
                            } catch (err) {
                                console.error(err);
                                toast.error("Full delete failed.");
                            } finally {
                                toast.dismiss(wipeToast);
                                setIsDeleting(false);
                            }
                        }}
                        className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
                    >
                        Delete All
                    </button>
                </div>
            </div>
        ), { duration: Infinity });
    };


    // Handle Drag End (Reorder)
    const handleDragEnd = (event) => {
        const { active, over } = event;

        // ✅ SAFETY CHECK (important)
        if (!over || active.id === over.id) return;

        const oldIndex = images.findIndex((item) => item.id === active.id);
        const newIndex = images.findIndex((item) => item.id === over.id);

        // ✅ Extra guard (prevents crash)
        if (oldIndex === -1 || newIndex === -1) return;

        const newItems = arrayMove(images, oldIndex, newIndex);

        setImages(newItems);
        updateOrderInSanity(newItems);
    };


    const updateOrderInSanity = async (newItems) => {
        try {
            // Filter invalid items
            const validItems = newItems.filter(item => item._id);
            if (validItems.length === 0) return;

            const mutations = validItems.map((item, index) => ({
                patch: {
                    id: item._id,
                    set: { order: index }
                }
            }));

            const transaction = client.transaction();
            mutations.forEach(mutation =>
                transaction.patch(mutation.patch.id, p => p.set(mutation.patch.set))
            );
            await transaction.commit();

            toast.success("Order updated", { duration: 1500, icon: '✅' });


        } catch (err) {
            console.error("Order update failed", err);
            toast.error(`Order save failed: ${err.message}`);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Toaster position="top-center" />
                <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                    <h1 className="text-2xl font-serif text-[#5B0A1A] mb-6 text-center">Admin Access</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter PIN" className="w-full p-3 border border-gray-300 rounded focus:border-[#5B0A1A] outline-none text-center tracking-[1em]" autoFocus />
                        <button disabled={uploading} type="submit" className="w-full bg-[#5B0A1A] text-white py-3 rounded hover:bg-black transition-colors disabled:opacity-50">
                            {uploading ? 'Checking...' : 'Initialize'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Toaster position="top-right" />
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <h1 className="text-3xl font-serif text-[#5B0A1A]">Collection Manager</h1>

                    <div className="flex gap-4 items-center">
                        <span className="text-sm text-gray-500">{images.length} Items</span>
                    </div>
                </div>

                {/* Upload Zone */}
                <div {...getRootProps()} className={`border-2 border-dashed border-gray-200 rounded-lg p-8 text-center mb-8 cursor-pointer hover:border-[#5B0A1A] transition-colors ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
                    <input {...getInputProps()} />
                    {uploading ? (<p className="text-[#5B0A1A] animate-pulse">Processing...</p>) : (
                        <div className="space-y-1">
                            <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            <p className="text-sm text-gray-500">Drag & drop new images</p>
                        </div>
                    )}
                </div>

                {/* Bulk Actions Bar */}
                {images.length > 0 && (
                    <div className="flex flex-wrap justify-between items-center mb-6 bg-gray-50 p-4 rounded border border-gray-100 sticky top-0 z-10">
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={selectedImages.length === images.length && images.length > 0}
                                    onChange={toggleSelectAll}
                                    className="w-4 h-4 accent-[#5B0A1A]"
                                />
                                Select All
                            </label>
                            {selectedImages.length > 0 && <span className="text-sm text-[#5B0A1A] font-bold">({selectedImages.length} selected)</span>}
                        </div>

                        <div className="flex gap-3">
                            {selectedImages.length > 0 && (
                                <button
                                    onClick={deleteSelected}
                                    disabled={isDeleting}
                                    className="bg-red-50 text-red-600 px-4 py-2 rounded text-sm font-medium hover:bg-red-100 transition-colors"
                                >
                                    {isDeleting ? 'Deleting...' : 'Delete Selected'}
                                </button>
                            )}
                            <button
                                onClick={deleteAll}
                                disabled={isDeleting}
                                className="text-red-500 hover:text-red-700 text-xs uppercase tracking-wider font-bold px-4 py-2"
                            >
                                Delete All
                            </button>
                        </div>
                    </div>
                )}

                {/* Gallery Grid */}
                <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                    <SortableContext items={images.map(img => img.id)} strategy={rectSortingStrategy}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 pb-20">
                            {images.map((img, index) => (
                                <SortableItem
                                    key={img.id}
                                    id={img.id}
                                    image={img.image}
                                    index={index}
                                    isSelected={selectedImages.includes(img.id)}
                                    onToggleSelect={toggleSelect}
                                    onRemove={handleRemove}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>

                {images.length === 0 && !uploading && (
                    <div className="text-center text-gray-400 py-12">No images yet. Start uploading.</div>
                )}
            </div>
        </div>
    );
};

export default Admin;
