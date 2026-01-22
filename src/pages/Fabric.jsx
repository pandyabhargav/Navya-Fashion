import React, { Suspense, lazy } from 'react';

const FabricDetails = lazy(() => import('../components/FabricDetails'));

const Fabric = () => {
    return (
        <main className="pt-10">
            <Suspense fallback={<div className="py-20 text-center text-gray-400 uppercase tracking-widest animate-pulse">Loading material story...</div>}>
                <FabricDetails />
            </Suspense>
        </main>
    );
};

export default Fabric;
