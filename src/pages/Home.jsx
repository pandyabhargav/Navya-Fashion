import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import USPSection from '../components/USPSection';
import Categories from '../components/Categories';

const Products = lazy(() => import('../components/Products'));
const FabricDetails = lazy(() => import('../components/FabricDetails'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FAQ = lazy(() => import('../components/FAQ'));

const Home = () => {
    return (
        <main>
            <Hero />
            <USPSection />
            <Categories />

            <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading amazing collection...</div>}>
                <Products isHomePage={true} />
            </Suspense>

            <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading material story...</div>}>
                <FabricDetails />
            </Suspense>

            <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading community voices...</div>}>
                <Testimonials />
            </Suspense>

            <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading questions...</div>}>
                <FAQ />
            </Suspense>
        </main>
    );
};

export default Home;
