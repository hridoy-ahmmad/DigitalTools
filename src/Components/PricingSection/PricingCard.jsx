import React from 'react';
import { BiCheck } from 'react-icons/bi';

const PricingCard = ({ plan }) => {
    return (
        <div
            className={`relative p-10 rounded-xl hover:-translate-y-2 hover:shadow-2xl flex flex-col transition-all duration-300 ${plan.isPopular
                ? 'bg-linear-to-br from-[#4F39F6] to-[#9514FA] text-white shadow-2xl scale-105 z-10'
                : 'bg-white border border-gray-100 text-gray-900 shadow-sm'
                }`}
        >
            {/* Most Popular Badge */}
            {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-700 text-sm font-bold px-4 py-1 rounded-full shadow-md">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`${plan.isPopular ? 'text-purple-100' : 'text-gray-500'} text-sm`}>
                    {plan.description}
                </p>
            </div>

            <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={`ml-2 ${plan.isPopular ? 'text-purple-200' : 'text-gray-400'}`}>/Month</span>
            </div>

            <ul className="space-y-4 flex-grow">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                        <BiCheck className={`${plan.isPopular ? 'text-white' : 'text-green-500'} w-5 h-5`} />
                        <span className={plan.isPopular ? 'text-purple-50' : 'text-gray-600'}>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-4 rounded-full font-bold transition-all duration-200 active:scale-95 my-5 ${plan.isPopular
                    ? 'bg-white text-[#8B2CFF] hover:bg-gray-50 hover:scale-105'
                    : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:scale-105'
                    }`}
            >
                {plan.buttonText}
            </button>
        </div>
    );
};

export default PricingCard;