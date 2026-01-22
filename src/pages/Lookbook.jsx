import React, { Suspense, lazy } from 'react';

const LookbookGrid = lazy(() => import('../components/LookbookGrid'));

const Lookbook = () => {
    return (
        <main className="pt-10">
            <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading lookbook...</div>}>
                <LookbookGrid />
            </Suspense>
        </main>
    );
};

export default Lookbook;
