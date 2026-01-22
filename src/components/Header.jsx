import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Collection', path: '/products' },
        { name: 'Lookbook', path: '/lookbook' },
        { name: 'Quality', path: '/fabric-quality' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="w-full relative z-50">
            {/* Top Banner */}
            <div className="bg-[#5B0A1A] text-white text-[10px] md:text-sm py-2 px-4 flex justify-between items-center font-light tracking-wide">
                <div className="flex gap-4">
                    <span>Call Us: +91 9999999999</span>
                    <span>Email: info@navyafashion.com</span>
                </div>
                <div className="hidden md:block">
                    Free Shipping on all orders over ₹4999
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white py-6 px-6 md:px-12 flex justify-center items-center border-b border-gray-100 relative">
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden absolute left-6 top-1/2 -translate-y-1/2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6 text-[#5B0A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Logo (Centered) */}
                    <Link to="/" className="flex flex-col items-center">
                        <span className="text-3xl md:text-4xl font-serif text-[#5B0A1A] font-bold tracking-tighter leading-none">Navya Fashion</span>
                        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1">Est. 2009 • Handcrafted Elegance</span>
                    </Link>
                </div>
            </div>

            {/* Navigation Menu (Desktop) */}
            <nav className="hidden md:flex justify-center bg-white py-3 border-b border-gray-100">
                <ul className="flex gap-10 text-[13px] font-medium tracking-widest text-[#5B0A1A] uppercase">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `pb-1 transition-all duration-300 ${isActive ? 'border-b-2 border-[#5B0A1A]' : 'hover:border-b-2 border-[#5B0A1A] opacity-80 hover:opacity-100'}`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
                <ul className="py-4 px-6 flex flex-col gap-4 text-sm font-medium text-[#5B0A1A] uppercase tracking-wider">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => isActive ? 'font-bold' : ''}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
