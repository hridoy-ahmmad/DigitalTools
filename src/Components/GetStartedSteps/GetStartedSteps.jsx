import React from 'react';
import user from '../../assets/user.png'
import packageImg from '../../assets/package.png'
import rocketImg from '../../assets/rocket.png'


const GetStartedSteps = () => {


    const steps = [
        {
            id: '01',
            title: 'Create Account',
            description: 'Sign up for free in seconds. No credit card required to get started.',
            icon: <img src={user}></img>
        },
        {
            id: '02',
            title: 'Choose Products',
            description: 'Browse our catalog and select the tools that fit your needs.',
            icon: <img src={packageImg}></img>

        },
        {
            id: '03',
            title: 'Start Creating',
            description: 'Download and start using your premium tools immediately.',
            icon: <img src={rocketImg}></img>

        },
    ];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative p-10 bg-white border border-gray-100 rounded-md flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                        >
                            {/* Step Number Badge */}
                            <div className="absolute top-6 right-6 bg-[#8B2CFF] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                {step.id}
                            </div>

                            {/* Icon Container */}
                            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                                {step.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed max-w-[250px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetStartedSteps;