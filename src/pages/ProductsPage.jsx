import React, { Suspense, lazy } from 'react';
import Categories from '../components/Categories';

const Products = lazy(() => import('../components/Products'));

const ProductsPage = () => {
    return (
        <main className="pt-20">
            <div className="bg-[#5B0A1A] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Collections</h1>
                <p className="text-sm md:text-base uppercase tracking-widest opacity-80">Handcrafted Excellence in Every Stitch</p>
            </div>

            <Categories />

            <div id="all-products">
                <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading products...</div>}>
                    <Products />
                </Suspense>
            </div>

            <div className="bg-gray-50 py-24 px-6 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h3 className="text-2xl md:text-3xl font-serif text-[#5B0A1A]">Don't see what you're looking for?</h3>
                    <p className="text-gray-600">We offer customization and personalized styling advice on WhatsApp.</p>
                    <a
                        href="https://wa.me/919999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-4 bg-[#5B0A1A] text-white uppercase tracking-widest text-sm rounded-sm shadow-xl"
                    >
                        Talk to a Stylist
                    </a>
                </div>
            </div>
        </main>
    );
};

export default ProductsPage;
