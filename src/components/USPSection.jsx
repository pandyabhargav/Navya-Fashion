import React from 'react';

const usps = [
    {
        title: 'Premium Fabrics',
        description: 'We use only the finest cotton, silk, and rayon blends for lasting comfort.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        )
    },
    {
        title: 'Ethically Handcrafted',
        description: 'Every piece is crafted by skilled artisans, supporting traditional craftsmanship.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        title: 'Everyday Elegance',
        description: 'Designed for the modern woman who values style and comfort in daily wear.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
            </svg>
        )
    },
    {
        title: 'Made in India',
        description: 'Proudly conceptualized and produced in the heart of India.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 01-2 2zm9-11h.01" />
            </svg>
        )
    }
];

const USPSection = () => {
    return (
        <section className="py-16 md:py-24 bg-[#5B0A1A]/5 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {usps.map((usp, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4 group">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#5B0A1A] shadow-lg group-hover:scale-110 transition-transform duration-500">
                                {usp.icon}
                            </div>
                            <h3 className="text-xl font-serif text-[#5B0A1A] font-bold">{usp.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                                {usp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default USPSection;
