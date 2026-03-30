import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ToolCard = ({ item, handleAddCart }) => {
    return (
        <div>
            <div className="flex items-center justify-center ">
                {/* Main Card Container */}
                <div className="relative w-full bg-white border border-gray-100 rounded-lg p-8 shadow-sm">

                    {/* Best Seller Badge */}
                    <div className="absolute top-6 right-6 bg-[#FEF3C7] text-[#92400E] text-sm font-medium px-4 py-1.5 rounded-full">
                        {item.tag}
                    </div>

                    {/* Icon Header */}
                    <div className="mb-6">
                        <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
                            {/* Simple emoji or SVG to represent the writing icon */}
                            <span className="text-2xl">{item.icon}</span>
                        </div>
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-3 my-4">
                        <h2 className="text-3xl font-bold text-[#0F172A]">
                            {item.name}
                        </h2>
                        <p className="text-[#64748B] text-lg leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-baseline my-4">
                        <span className="text-2xl font-bold text-[#0F172A]">{item.price}/</span>
                        <span className="text-[#64748B] text-xl ml-1">{item.period}</span>
                    </div>

                    {/* Features List */}
                    {
                        item.features.map(i => 
                        <div className='flex gap-2 textPrimary'>
                            <p className='flex gap-2 textPrimary items-center text-[#64748B]'> <FaCheck className='text-green-500'/>{i}</p>
                        </div>)
                    }


                    {/* Buy Now Button */}
                    <button 
                    onClick={()=> handleAddCart(item)}
                    className="w-full buttonPrimary text-white font-bold py-5 rounded-[24px] text-xl transition-colors duration-200 my-4">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;