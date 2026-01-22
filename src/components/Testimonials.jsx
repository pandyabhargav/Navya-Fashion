import React from 'react';

const testimonials = [
    {
        name: 'Anjali Sharma',
        role: 'Verified Buyer',
        text: 'The fabric quality is simply outstanding. I’ve been looking for authentic hand-block printed kurtis for a long time, and Navya Fashion delivered beyond expectations!',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
        name: 'Priya Patel',
        role: 'Fashion Blogger',
        text: 'Usually, I find many brands compromise on the fit, but Navya’s kurtis feel like they were custom-tailored for me. Perfect for my long office days.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
        name: 'Meenakshi Iyer',
        role: 'Loyal Customer',
        text: 'Their festive collection is a dream. Elegant, subtle, yet so premium. Every time I wear their pieces, I get compliments. Highly recommend!',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h4 className="text-[#5B0A1A] text-center uppercase tracking-[0.3em] text-sm font-semibold mb-4">Voices of Trust</h4>
                <h2 className="text-4xl md:text-5xl font-serif text-[#5B0A1A] text-center mb-16">What Our Community Says</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-gray-50 p-10 rounded-2xl relative shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center">
                            <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-6 border-4 border-white shadow-md" />
                            <p className="text-gray-600 italic leading-relaxed mb-6">"{t.text}"</p>
                            <div>
                                <h5 className="font-bold text-[#5B0A1A]">{t.name}</h5>
                                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
