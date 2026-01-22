import React from 'react';

const videos = [
    { id: 1, title: 'Bridal Collection 2026', thumbnail: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f5f85?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'The Art of Saree Draping', thumbnail: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80' },
];

const Videos = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 text-[#5B0A1A]">Videos</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {videos.map((video) => (
                        <div key={video.id} className="group relative aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                                <button className="w-20 h-20 rounded-full bg-white/20 border-2 border-white flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                                    <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
                                    </svg>
                                </button>
                                <h3 className="text-white text-2xl font-serif mt-6 tracking-wide drop-shadow-lg">{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Videos;
