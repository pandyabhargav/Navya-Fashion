import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const Lookbook = lazy(() => import('./pages/Lookbook'));
const Fabric = lazy(() => import('./pages/Fabric'));
const Admin = lazy(() => import('./pages/Admin'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      {/* App Loader */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#5B0A1A]/30 border-t-[#5B0A1A] rounded-full animate-spin"></div>
            <p className="text-sm tracking-widest uppercase text-gray-500">
              Loading
            </p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-[#5B0A1A] selection:text-white">
        <Header />

        <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/lookbook" element={<Lookbook />} />
            <Route path="/fabric-quality" element={<Fabric />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Suspense fallback={<div className="h-64 bg-[#5B0A1A]"></div>}>
          <Footer />
        </Suspense>

        {/* Back to Top Button */}
        {showTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-25 right-7 z-50 bg-[#5B0A1A] text-white w-12 h-12 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
          >
            ↑
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;
