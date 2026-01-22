import React from 'react';
import heroRight from '../assets/hero-right.png';
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2 relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#5B0A1A]/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10 border-8 border-gray-50 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={heroRight}
                            alt="About Navya Fashion"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-[#5B0A1A] p-8 text-white hidden md:block rounded-sm shadow-xl">
                        <p className="text-4xl font-serif">15+</p>
                        <p className="text-xs uppercase tracking-widest opacity-80">Years of Legacy</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-8">
                    <h4 className="text-[#5B0A1A] uppercase tracking-[0.3em] text-sm font-semibold">Our Heritage</h4>
                    <h2 className="text-4xl md:text-6xl font-serif text-[#5B0A1A] leading-tight">Every Thread Tells a Story</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Navya Fashion began with a simple vision: to bring the effortless elegance of traditional Indian
                        craftsmanship into the daily lives of modern women. What started as a small boutique in 2009
                        has grown into a trusted name for those who seek authenticity, comfort, and timeless style.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our designs are inspired by the diverse cultures of India—from the intricate block prints of
                        Rajasthan to the delicate weaves of the South. We don't just sell kurtis; we preserve a legacy
                        of hand-stitched excellence that celebrates the woman who wears it.
                    </p>

                    <div className="grid grid-cols-2 gap-8 py-4 border-t border-gray-100">
                        <div>
                            <h5 className="text-[#5B0A1A] font-bold text-xl mb-2">Artisan Led</h5>
                            <p className="text-gray-500 text-sm">Directly supporting local craftsmen and preserving age-old techniques.</p>
                        </div>
                        <div>
                            <h5 className="text-[#5B0A1A] font-bold text-xl mb-2">No Mass Production</h5>
                            <p className="text-gray-500 text-sm">Limited collections to ensure every piece receives personal attention.</p>
                        </div>
                    </div>

                    <button className="flex items-center gap-4 text-[#5B0A1A] font-bold uppercase tracking-widest group" onClick={() => navigate("/products")}>
                        <span className="border-b-2 border-[#5B0A1A] pb-1 group-hover:mr-2 transition-all">Discover Our Craft</span>
                        <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
