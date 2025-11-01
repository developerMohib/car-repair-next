
import React from 'react';
import { PricingCardProps, PricingFeature, PricingPlan } from '@/shared/lib/pricingData';
import { CheckIcon, TimesIcon } from '../../../public/icons/Icons';
import instance from '@/shared/instance';


// Individual Pricing Card Component
const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const cardClasses = `
    pricing-card bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl
    border rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300
    hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl
    ${plan.isPopular
      ? 'border-2 border-indigo-500 dark:border-indigo-400 relative shadow-lg shadow-indigo-500/20 dark:shadow-indigo-400/20'
      : 'border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600'
    }
  `;

  const buttonClasses = `
    w-full py-3 px-6 rounded-lg font-medium mt-auto transition-all duration-300
    border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2
    ${plan.isPopular
      ? 'bg-indigo-500 dark:bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 dark:shadow-indigo-600/30 hover:bg-indigo-600 dark:hover:bg-indigo-700 focus:ring-indigo-500 dark:focus:ring-indigo-400'
      : `
        bg-white/70 dark:bg-zinc-800/70 hover:bg-white dark:hover:bg-zinc-800
        text-slate-800 dark:text-zinc-200
        border border-slate-200 dark:border-zinc-600
        backdrop-blur-sm hover:shadow-md dark:hover:shadow-lg
        focus:ring-slate-500 dark:focus:ring-zinc-400
       `
    }
  `;

  return (
    <div className={cardClasses}>
      {plan.isPopular && (
        <div className="absolute top-0 right-4 -mt-3 bg-indigo-500 dark:bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-800 dark:text-zinc-100 mb-4">{plan.name}</h3>
      <p className="text-gray-800 dark:text-zinc-100 text-4xl font-bold mb-2">
        {plan.price}
        {plan.pricePeriod && (
          <span className="text-lg text-gray-500 dark:text-zinc-400 font-medium">{plan.pricePeriod}</span>
        )}
      </p>
      <p className="text-gray-600 dark:text-zinc-400 mb-8 text-sm h-10">{plan.description}</p>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature: PricingFeature, index: number) => (
          <li
            key={index}
            className={`flex items-center ${
              feature.included
                ? 'text-gray-700 dark:text-zinc-300'
                : 'text-gray-400 dark:text-zinc-500'
            }`}
          >
            {feature.included ? <CheckIcon /> : <TimesIcon />}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button className={buttonClasses}>
        {plan.buttonText}
      </button>
    </div>
  );
};
const Pricing = async() => {
  const { data } = await instance.get('/componentsdata/pricing');
    const pricing = data?.data 
    return (
       <section id="pricing" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that works best for your team. No hidden fees, no surprises.
            Start with a free trial and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricing?.map((plan: PricingPlan, index: number) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Additional info section */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-sm text-gray-500 dark:text-zinc-500 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-zinc-400">
            <span className="flex items-center">
              <CheckIcon />
              Cancel anytime
            </span>
            <span className="flex items-center">
              <CheckIcon />
              24/7 support
            </span>
            <span className="flex items-center">
              <CheckIcon />
              99.9% uptime SLA
            </span>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Pricing;