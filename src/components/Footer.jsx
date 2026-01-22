import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#5B0A1A] text-white pt-20 pb-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif tracking-tighter">Navya Fashion</h2>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Everyday elegance in handcrafted kurtis. Bringing the finest Indian
                            heritage to the modern wardrobe since 2009.
                        </p>
                        <div className="flex gap-4">
                            {/* ... icons remain same ... */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-sm uppercase tracking-widest font-bold border-b border-white/10 pb-2">Collections</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">Daily Wear</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Festive Collection</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Work Wear</li>
                            <li className="hover:text-white cursor-pointer transition-colors">New Arrivals</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Lookbook</li>
                        </ul>
                    </div>

                    {/* Quality & Care */}
                    <div className="space-y-6">
                        <h4 className="text-sm uppercase tracking-widest font-bold border-b border-white/10 pb-2">Quality</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">Fabric Guide</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Care Instructions</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Artisan Stories</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Wholesale Enquiry</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact Support</li>
                        </ul>
                    </div>

                    {/* Social Connect */}
                    <div className="space-y-6">
                        <h4 className="text-sm uppercase tracking-widest font-bold border-b border-white/10 pb-2">Follow Us</h4>
                        <p className="text-gray-300 text-sm">Join our social community for daily style inspiration.</p>
                        <div className="flex gap-6">
                            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#5B0A1A] transition-all bg-white/5">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#5B0A1A] transition-all bg-white/5">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-400">© 2026 Navya Fashion Private Limited. All Rights Reserved.</p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-400">
                        <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
