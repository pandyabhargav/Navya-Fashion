import React from 'react';
import heroRight from '../assets/hero-right.webp';
import { useNavigate } from "react-router-dom";
const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative w-full h-[600px] md:h-[90vh] bg-[#f8f6f2] overflow-hidden">
            <div className="w-full h-full flex flex-col md:flex-row">

                {/* Left Text Side */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-24 space-y-8 z-10 bg-[#f8f6f2]">
                    <div className="animate-fade-in-up">
                        <span className="text-[#5B0A1A] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4">
                            Premium Handcrafted
                        </span>
                        <h1 className="text-[#5B0A1A] text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1]">
                            Everyday <br /> <span className="italic font-light">Elegance</span>
                        </h1>
                        <p className="text-gray-500 font-light tracking-wide text-sm md:text-base mt-6 max-w-md leading-relaxed">
                            Discover our curated collection of hand-stitched kurtis. Designed for the modern woman who values heritage, comfort, and timeless style.
                        </p>
                        <div className="mt-10">
                            <button  onClick={() => navigate("/products")} className="px-10 py-4 bg-[#5B0A1A] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-all shadow-xl">
                                View Collection
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Image Side */}
                <div className="w-full md:w-1/2 h-full relative">
                    <img
                        src={heroRight}
                        alt="Navya Fashion Hero"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6f2] via-transparent to-transparent md:w-32"></div>
                </div>
            </div>
        </section>
    );
};


export default Hero;
