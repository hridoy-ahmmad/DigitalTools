import React from 'react';
import { BiError, BiShoppingBag } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';

const EmptyCart = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center  p-6 text-center bg-white rounded-xl border border-gray-100 shadow-sm my-5 mx-auto">

                {/* Icon Container */}
                <div className="relative mb-6">
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center">
                        <BiError size={48} className="text-[#8B2CFF] opacity-80" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-100 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-100 rounded-full blur-sm"></div>
                </div>

                {/* Text Content */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Your cart is empty
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Looks like you haven't added anything to your cart yet. Explore our top-rated AI tools and start creating!
                </p>
            </div>
        </div>
    );
};

export default EmptyCart;