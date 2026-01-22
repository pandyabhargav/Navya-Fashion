import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import catKurti from '../assets/cat-kurti.webp';
import catLehenga from '../assets/cat-lehenga.webp';
import { client, urlFor } from '../sanity';

// Static fallback data
const staticProducts = [
    { id: 1, name: 'Floral Hand-Block Cotton Kurti', price: '₹2,499', image: catKurti, fabric: '100% Cotton' },
    { id: 2, name: 'Royal Indigo Chikankari Kurti', price: '₹4,999', image: catKurti, fabric: 'Mulmul' },
    { id: 3, name: 'Golden Zari Silk Kurti', price: '₹8,999', image: catLehenga, fabric: 'Chanderi Silk' },
    { id: 4, name: 'Summer Mint Rayon Tunic', price: '₹1,599', image: catKurti, fabric: 'Soft Rayon' },
    { id: 5, name: 'Traditional Red Bandhani Kurti', price: '₹3,999', image: catKurti, fabric: 'Cotton' },
    { id: 6, name: 'Noir Elegance Work Wear', price: '₹2,200', image: catKurti, fabric: 'Linen Blend' },
    { id: 7, name: 'Pale Rose Festive Kurti', price: '₹3,450', image: catLehenga, fabric: 'Silk Blend' },
    { id: 8, name: 'Classic White Chikankari', price: '₹2,100', image: catKurti, fabric: 'Cotton' },
];

const Products = ({ isHomePage = false }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [useStatic, setUseStatic] = useState(false);

    const fetchProducts = async () => {
        try {
            if (!import.meta.env.VITE_SANITY_PROJECT_ID) {
                setProducts(staticProducts);
                setUseStatic(true);
                return;
            }

            const query = isHomePage
                ? `*[_type == "galleryImage"] | order(order asc) [0...8]`
                : `*[_type == "galleryImage"] | order(order asc)`;

            const data = await client.fetch(query);

            if (data.length === 0) {
                setProducts(staticProducts);
                setUseStatic(true);
            } else {
                setProducts(data);
            }
        } catch (err) {
            console.warn("Using static data due to fetch error:", err);
            setProducts(staticProducts);
            setUseStatic(true);
        } finally {
            setLoading(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        fetchProducts();
    }, [isHomePage]);

    // 🔥 REAL-TIME LISTENER (AUTO UPDATE FOR ALL USERS)
    useEffect(() => {
        if (!import.meta.env.VITE_SANITY_PROJECT_ID) return;

        const subscription = client
            .listen(`*[_type == "galleryImage"]`)
            .subscribe(() => {
                fetchProducts();
            });

        return () => subscription.unsubscribe();
    }, [isHomePage]);

    if (loading) {
        return (
            <div className="py-32 text-center">
                <div className="inline-block w-8 h-8 border-4 border-[#5B0A1A] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <section className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-center mb-4 text-[#5B0A1A]">
                    {isHomePage ? 'Curated Collection' : 'Our Full Collection'}
                </h2>
                <p className="text-center text-gray-500 mb-16 uppercase tracking-widest text-sm">
                    {isHomePage
                        ? 'Timeless Designs, Handcrafted for You'
                        : 'Explore our complete range of handcrafted styles'}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {products.map((product) => (
                        <div
                            key={product._id || product.id}
                            className="bg-white group overflow-hidden border border-gray-100 transition-all hover:shadow-xl rounded-sm"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                {product.image && (
                                    <img
                                        src={
                                            product._type === 'galleryImage'
                                                ? urlFor(product.image).width(600).url()
                                                : product.image
                                        }
                                        alt={product.name || 'Navya Product'}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
