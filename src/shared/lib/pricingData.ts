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
