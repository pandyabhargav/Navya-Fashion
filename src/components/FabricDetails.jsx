import React from 'react';

const fabrics = [
    {
        name: 'Pure Cotton',
        quality: 'Breathable, Hypoallergenic, and Durable.',
        story: 'Sourced from the finest cotton belts of India, our cotton is mercerized for a silk-like sheen and extra strength.',
        care: 'Machine wash cold Gental cycle. Do not bleach. Tumble dry low.',
        icon: '🧶'
    },
    {
        name: 'Vibrant Rayon',
        quality: 'Fluid Drape, Soft Texture, and High Absorbency.',
        story: 'Our rayon is high-grade viscoe, processed to maintain its softness wash after wash, perfect for everyday elegance.',
        care: 'Hand wash recommended. Iron on low heat. Dry in shade.',
        icon: '🌬️'
    },
    {
        name: 'Heritage Silk',
        quality: 'Luxurious Lustre, Temperature Regulating, and Timeless.',
        story: 'We use blended silks that offer the richness of mulberry silk with the practicality of modern maintenance.',
        care: 'Dry clean only. Store in a muslin cloth. Avoid direct perfume contact.',
        icon: '✨'
    }
];

const FabricDetails = () => {
    return (
        <section className="py-24 bg-white px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <h4 className="text-[#5B0A1A] uppercase tracking-[0.3em] text-sm font-semibold mb-4">Our Material Philosophy</h4>
                        <h2 className="text-4xl md:text-6xl font-serif text-[#5B0A1A] mb-8 leading-tight">Where Quality Meets Comfort</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            At Navya Fashion, we believe that the beauty of a kurti starts with the thread.
                            We spend months sourcing materials that don't just look premium but feel like a
                            second skin.
                        </p>

                        <div className="space-y-8">
                            {fabrics.map((f, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm text-[#5B0A1A] rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:bg-[#5B0A1A] group-hover:text-white transition-all duration-500">
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold text-[#5B0A1A] mb-1">{f.name}</h5>
                                        <p className="text-gray-500 text-sm">{f.quality}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 gap-6">
                        {fabrics.map((f, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                                <h5 className="font-bold text-[#5B0A1A] uppercase tracking-widest text-sm mb-4 border-b border-gray-200 pb-2">The {f.name} Story</h5>
                                <p className="text-gray-600 text-sm mb-6 italic">"{f.story}"</p>
                                <div className="flex items-center gap-3 text-xs font-semibold text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Care: {f.care}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FabricDetails;
