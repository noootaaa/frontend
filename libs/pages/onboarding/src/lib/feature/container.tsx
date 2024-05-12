import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Params } from 'react-router-dom';
import { ROUTER_ONBOARDING } from '../router';
import { Route } from '@nooota/contracts';

export interface ContainerProps {
  params: Readonly<Params<string>>
}

export function Container({ children, params }: PropsWithChildren<ContainerProps>) {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [step, setStep] = useState(params['*'])
  const [totalSteps, setTotalSteps] = useState(ROUTER_ONBOARDING.length)

  const currentRoutes = ROUTER_ONBOARDING

  function currentStepPosition(route: Route[]) {
    return route.findIndex((r) => r.path === `/${step?.split('/')[0]}`) + 1
  }

  useEffect(() => {
    setStep(params['*'])
  }, [params])

  useEffect(() => {
    if (step) {
      setCurrentStep(currentStepPosition(currentRoutes))
    }
  }, [step])

  useEffect(() => {
    console.log('currentStep', currentStep);
  }, []);


  return (
    <div className="h-full">
      <div data-testid="progress-bar-wrapper" className="h-[6px] bg-neutral-250 relative shrink-0">
        <div
          data-testid="progress-bar"
          style={{ transform: `scaleX(${currentStep / totalSteps})` }}
          className="h-full absolute origin-left transition-transform duration-700 ease-in-out inset-0 bg-indigo-500"
        />
      </div>
      <div data-testid="funnel-content" className="flex-grow min-h-0 flex relative h-full">
        <div className="bg-white pt-14 px-12 w-full h-full">
          {children}
        </div>


      </div>
    </div>
  )
}
