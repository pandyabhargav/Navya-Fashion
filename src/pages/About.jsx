import React, { Suspense, lazy } from 'react';

const AboutUs = lazy(() => import('../components/AboutUs'));
const USPSection = lazy(() => import('../components/USPSection'));

const About = () => {
    return (
        <main className="pt-10">
            <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading about section...</div>}>
                <AboutUs />
                <USPSection />
                <div className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-serif text-[#5B0A1A]">Our Vision</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To become a global destination for handcrafted Indian ethnic wear,
                            where every garment is a tribute to the artisan and a treasure
                            for the wearer. We aim to empower local communities while
                            redefining premium fashion with sustainability and soul.
                        </p>
                    </div>
                </div>
            </Suspense>
        </main>
    );
};

export default About;
