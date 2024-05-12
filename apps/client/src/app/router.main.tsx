import { ReactElement } from 'react'
import { PageHome } from '@nooota/pages/home'
import { PageOnboarding } from '@nooota/pages/onboarding';

interface RouteProps {
  path: string
  component: ReactElement
  protected: boolean
  layout: boolean
  darkMode?: boolean
}

export const ROUTER: RouteProps[] = [
  {
    path: '/home/*',
    component: <PageHome />,
    layout: true,
    protected: true
  },
  {
    path: '/onboarding/*',
    component: <PageOnboarding />,
    layout: false,
    protected: true,
  }
]
