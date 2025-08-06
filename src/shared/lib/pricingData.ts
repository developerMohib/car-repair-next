export interface PricingFeature {
  text: string;
  included: boolean;
}
 
export interface PricingPlan {
  name: string;
  price: string;
  pricePeriod: string | null;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular: boolean;
}

export interface PricingCardProps {
  plan: PricingPlan;
}

// Data for the pricing plans
export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$19',
    pricePeriod: '/month',
    description: 'Perfect for individuals and small teams starting out.',
    features: [
      { text: 'Up to 3 users', included: true },
      { text: 'Basic automations', included: true },
      { text: '5GB storage', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'Priority support', included: false },
    ],
    buttonText: 'Get Started',
    isPopular: false,
  },
  {
    name: 'Professional',
    price: '$49',
    pricePeriod: '/month',
    description: 'For growing teams that need more power and features.',
    features: [
      { text: 'Up to 10 users', included: true },
      { text: 'Advanced automations', included: true },
      { text: '50GB storage', included: true },
      { text: 'AI-powered analytics', included: true },
      { text: 'Priority support', included: true },
    ],
    buttonText: 'Start Free Trial',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    pricePeriod: null,
    description: 'For large organizations with complex needs and scale.',
    features: [
      { text: 'Unlimited users', included: true },
      { text: 'Custom automations & SSO', included: true },
      { text: 'Unlimited storage', included: true },
      { text: 'Advanced analytics & reporting', included: true },
      { text: '24/7 dedicated support', included: true },
    ],
    buttonText: 'Contact Sales',
    isPopular: false,
  },
];