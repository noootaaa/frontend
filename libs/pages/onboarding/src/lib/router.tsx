import { OnboardingCompany } from './feature/onboarding-company'
import { Route } from '@nooota/contracts';
import { OnboardingPricing } from './feature/onboarding-pricing';

export const ROUTER_ONBOARDING: Route[] = [
  {
    path: '/company',
    component: <OnboardingCompany />,
  },
  {
    path: '/pricing',
    component: <OnboardingPricing />,
  },
]
