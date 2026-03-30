import React from 'react';

const Performance = () => {
    return (
        <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around text-white text-center">

                {/* Active Users */}
                <div className="flex-1 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">50K+</h2>
                    <p className="text-lg opacity-90 font-light">Active Users</p>
                </div>

                {/* Vertical Divider 1 */}
                <div className="hidden md:block w-[1px] h-16 bg-white opacity-30"></div>

                {/* Premium Tools */}
                <div className="flex-1 px-4 my-8 md:my-0">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">200+</h2>
                    <p className="text-lg opacity-90 font-light">Premium Tools</p>
                </div>

                {/* Vertical Divider 2 */}
                <div className="hidden md:block w-[1px] h-16 bg-white opacity-30"></div>

                {/* Rating */}
                <div className="flex-1 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">4.9</h2>
                    <p className="text-lg opacity-90 font-light">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Performance;