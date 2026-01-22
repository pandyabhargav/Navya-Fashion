import React, { useState } from 'react';

const faqData = [
    {
        question: "How do I place an order?",
        answer: "Since we focus on a personalized boutique experience, all orders and inquiries are handled directly via WhatsApp. Simply click the WhatsApp button on any product or the floating button at the bottom right to start a conversation with our style experts."
    },
    {
        question: "What fabrics do you use?",
        answer: "We specialize in premium, ethically handcrafted fabrics including Pure Cotton, Soft Rayon, and Heritage Silk. Each piece is designed for everyday elegance and long-lasting durability."
    },
    {
        question: "Do you offer customization?",
        answer: "Yes, we offer minor customizations for fit and length. Please share your specific requirements during our WhatsApp consultation."
    },
    {
        question: "What is your shipping policy?",
        answer: "We offer free shipping on all orders over ₹4999 within India. Standard delivery typically takes 5-7 business days."
    },
    {
        question: "How should I care for my handcrafted kurti?",
        answer: "We recommend hand washing in cold water with mild detergent or dry cleaning for the best longevity of the hand-blocks and delicate fabrics."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-center mb-4 text-[#5B0A1A]">Common Enquiries</h2>
                <p className="text-center text-gray-400 mb-16 uppercase tracking-[0.2em] text-sm">Everything you need to know about Navya Fashion</p>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full py-6 flex justify-between items-center text-left group"
                            >
                                <span className={`text-lg font-medium transition-colors duration-300 ${activeIndex === index ? 'text-[#5B0A1A]' : 'text-gray-700 group-hover:text-[#5B0A1A]'}`}>
                                    {item.question}
                                </span>
                                <span className={`transform transition-transform duration-300 text-[#5B0A1A] ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-48 mb-6' : 'max-h-0'}`}
                            >
                                <p className="text-gray-500 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
