import React from 'react';
import { BiCheck } from 'react-icons/bi';
import PricingCard from './PricingCard';


const PricingSection = () => {
    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for getting started',
            price: '0',
            features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
            buttonText: 'Get Started Free',
            isPopular: false,
        },
        {
            name: 'Pro',
            description: 'Best for professionals',
            price: '29',
            features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
            buttonText: 'Start Pro Trial',
            isPopular: true,
        },
        {
            name: 'Enterprise',
            description: 'For teams and businesses',
            price: '99',
            features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
            buttonText: 'Contact Sales',
            isPopular: false,
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="heading">Simple, Transparent Pricing</h2>
                    <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} plan={plan}></PricingCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;