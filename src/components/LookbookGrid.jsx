import React from 'react';
import catKurti from '../assets/cat-kurti.webp';
import catLehenga from '../assets/cat-lehenga.webp';
import catSaree from '../assets/cat-saree.webp';
import heroLeft from '../assets/hero-left.webp';
import heroRight from '../assets/hero-right.webp';
import prodSaree from '../assets/prod-saree-1.webp';

const lookbookBlocks = [
    {
        id: 'block1',
        layout: 'left-focus', // Big image on Left
        main: { src: heroLeft, title: 'Summer Breeze', subtitle: 'The Cotton Edit' },
        grid: [
            { id: 11, src: catKurti, title: 'Daily Comfort', subtitle: 'Essential Wear' },
            { id: 12, src: catLehenga, title: 'Festive Glow', subtitle: 'Celebration Ready' },
            { id: 13, src: catSaree, title: 'Silk Drapes', subtitle: 'Heritage Weaves' },
            { id: 14, src: prodSaree, title: 'Pastel Hues', subtitle: 'Soft Georgette' },
        ]
    },
    {
        id: 'block2',
        layout: 'right-focus', // Big image on Right
        main: { src: heroRight, title: 'Royal Heritage', subtitle: 'The Silk Collection' },
        grid: [
            { id: 21, src: catSaree, title: 'Evening Charm', subtitle: 'Cocktail Sarees' },
            { id: 22, src: prodSaree, title: 'Chikankari', subtitle: 'Handcrafted Detail' },
            { id: 23, src: catLehenga, title: 'Bridal Series', subtitle: 'Red & Gold' },
            { id: 24, src: catKurti, title: 'Office Chic', subtitle: 'Modern Cuts' },
        ]
    }
];

const LookbookGrid = () => {
    return (
        <section className="py-20 bg-white px-4 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-[#5B0A1A] uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Volume 24</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-[#5B0A1A]">Visual Stories</h2>
                </div>

                <div className="space-y-20">
                    {lookbookBlocks.map((block) => (
                        <div key={block.id} className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[800px]">
                            {/* Logic for Left Focus Layout */}
                            {block.layout === 'left-focus' ? (
                                <>
                                    {/* Big Image Section (Left) */}
                                    <div className="lg:w-1/2 h-[500px] lg:h-full relative group overflow-hidden">
                                        <img
                                            src={block.main.src}
                                            alt={block.main.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0"></div>
                                        <div className="absolute bottom-8 left-8 text-white">
                                            <p className="text-[10px] uppercase tracking-[0.3em] mb-2">{block.main.subtitle}</p>
                                            <h3 className="text-4xl font-serif">{block.main.title}</h3>
                                        </div>
                                    </div>

                                    {/* 4-Grid Section (Right) */}
                                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 h-[500px] lg:h-full">
                                        {block.grid.map((item) => (
                                            <div key={item.id} className="relative group overflow-hidden">
                                                <img
                                                    src={item.src}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-[#5B0A1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="text-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                        <h4 className="text-xl font-serif mb-1">{item.title}</h4>
                                                        <p className="text-[9px] uppercase tracking-widest">{item.subtitle}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                /* Logic for Right Focus Layout (Reverse) */
                                <>
                                    {/* 4-Grid Section (Left) */}
                                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 h-[500px] lg:h-full order-2 lg:order-1">
                                        {block.grid.map((item) => (
                                            <div key={item.id} className="relative group overflow-hidden">
                                                <img
                                                    src={item.src}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-[#5B0A1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="text-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                        <h4 className="text-xl font-serif mb-1">{item.title}</h4>
                                                        <p className="text-[9px] uppercase tracking-widest">{item.subtitle}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Big Image Section (Right) */}
                                    <div className="lg:w-1/2 h-[500px] lg:h-full relative group overflow-hidden order-1 lg:order-2">
                                        <img
                                            src={block.main.src}
                                            alt={block.main.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0"></div>
                                        <div className="absolute bottom-8 left-8 text-white">
                                            <p className="text-[10px] uppercase tracking-[0.3em] mb-2">{block.main.subtitle}</p>
                                            <h3 className="text-4xl font-serif">{block.main.title}</h3>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Refined Footer Actions */}
                <div className="mt-20 flex justify-center">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#5B0A1A] hover:opacity-70 transition-opacity"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] font-bold">Follow Our Journey</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LookbookGrid;
