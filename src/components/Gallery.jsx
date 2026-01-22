import React from 'react';
import heroLeft from '../assets/hero-left.png';
import heroRight from '../assets/hero-right.png';
import prodSaree1 from '../assets/prod-saree-1.png';

const Gallery = () => {
    const images = [heroLeft, heroRight, prodSaree1, heroLeft, heroRight, prodSaree1];

    return (
        <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 text-[#5B0A1A]">Gallery</h2>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {images.map((img, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg cursor-zoom-in">
                            <img
                                src={img}
                                alt={`Gallery ${index}`}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#5B0A1A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
