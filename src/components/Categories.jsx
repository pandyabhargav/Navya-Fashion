import React from 'react';
import catSaree from '../assets/cat-saree.webp';
import catKurti from '../assets/cat-kurti.webp';
import catLehenga from '../assets/cat-lehenga.webp';

const categories = [
    { name: 'Daily Wear', image: catKurti },
    { name: 'Festive Collection', image: catLehenga },
    { name: 'Cotton Classics', image: catKurti },
    { name: 'Work Wear', image: catKurti },
    { name: 'Hand-Painted', image: catSaree },
];

const Categories = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 text-[#5B0A1A]">Categories</h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="group cursor-pointer text-center">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-50 mb-4 transition-all duration-500 group-hover:shadow-2xl">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                            </div>
                            <h3 className="text-lg md:text-xl font-medium text-[#5B0A1A] tracking-wide">{cat.name}</h3>
                            <p className="text-xs text-gray-500 mt-1 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Explore More</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
