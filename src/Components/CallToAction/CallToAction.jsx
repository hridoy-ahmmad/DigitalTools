import React from 'react';

const CallToAction = () => {
    return (
        <section className="px-6 py-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            {/* Main Container with Gradient */}
            <div className="max-w-7xl mx-auto  text-center text-white  overflow-hidden">

                {/* Content */}
                <div className="">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Ready To Transform Your Workflow?
                    </h2>

                    <p className="text-purple-100 text-lg mb-10 leading-relaxed opacity-90">
                        Join thousands of professionals who are already using Digitools to work smarter.
                        Start your free trial today.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <button className="bg-white text-[#8B2CFF] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto active:scale-100 shadow-lg hover:scale-105">
                            Explore Products
                        </button>
                        <button className="bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200 w-full sm:w-auto active:scale-100 hover:scale-105">
                            View Pricing
                        </button>
                    </div>

                    {/* Bottom Trust Text */}
                    <p className="text-sm text-purple-200 font-medium opacity-80">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>

                {/* Decorative subtle glow (Optional) */}
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-[0.03] pointer-events-none"></div>
            </div>
        </section>
    );
};

export default CallToAction;