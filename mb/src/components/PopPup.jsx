import React from 'react';

function PopPup() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <section className="w-120 overflow-hidden rounded-lg shadow-2xl md:flex bg-white">
                <img
                    alt="Discount offer"
                    src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                    className="h-64 w-full object-cover md:h-auto md:w-64"
                />

                <div className="p-8 text-center md:flex md:flex-col md:justify-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Run with the pack</p>

                    <h2 className="mt-4 font-black uppercase">
                        <span className="text-4xl font-black sm:text-5xl lg:text-6xl text-gray-800"> Get 20% off </span>
                        <span className="mt-2 block text-sm text-gray-600">On your next order</span>
                    </h2>

                    <a
                        className="mt-6 inline-block w-full bg-teal-600 py-3 text-sm font-bold uppercase tracking-widest text-white transition-transform transform hover:scale-105"
                        href="#"
                    >
                        Get Discount
                    </a>

                    <p className="mt-4 text-xs font-medium uppercase text-gray-400">
                        Offer valid until 24th August, 2024 *
                    </p>
                </div>
            </section>
        </div>
    );
}

export default PopPup;
