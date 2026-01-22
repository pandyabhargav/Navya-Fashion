import React, { Suspense, lazy } from 'react';

const ContactUs = lazy(() => import('../components/ContactUs'));

const Contact = () => {
    return (
        <main className="pt-20">
            <div className="bg-[#5B0A1A] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">Get in Touch</h1>
                <p className="text-sm md:text-base uppercase tracking-widest opacity-80">We'd Love to Help You Find Your Perfect Fit</p>
            </div>

            <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading contact information...</div>}>
                <ContactUs />
            </Suspense>

            <div className="py-24 bg-gray-50 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 bg-[#5B0A1A]/5 rounded-full flex items-center justify-center text-[#5B0A1A] text-3xl">👗</div>
                        <h3 className="text-2xl font-serif text-[#5B0A1A]">Bulk & Wholesale</h3>
                        <p className="text-gray-600">Interested in carrying Navya Fashion in your store? We offer competitive wholesale pricing for boutique owners.</p>
                        <a href="mailto:wholesale@navyafashion.com" className="font-bold text-[#5B0A1A] border-b-2 border-[#5B0A1A] pb-1">wholesale@navyafashion.com</a>
                    </div>
                    <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 bg-[#5B0A1A]/5 rounded-full flex items-center justify-center text-[#5B0A1A] text-3xl">🌟</div>
                        <h3 className="text-2xl font-serif text-[#5B0A1A]">Collaborations</h3>
                        <p className="text-gray-600">Are you a fashion enthusiast or blogger? We love collaborating with creators who share our passion for heritage style.</p>
                        <a href="mailto:collabs@navyafashion.com" className="font-bold text-[#5B0A1A] border-b-2 border-[#5B0A1A] pb-1">collabs@navyafashion.com</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
