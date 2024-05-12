import { StepCompany } from '../ui/step-company'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@nooota/state/store';
import { organizationActions, useCreateOrganizationMutation } from '@nooota/domains/organization';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export function OnboardingCompany() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const [createOrganization, result] = useCreateOrganizationMutation()
  const methods = useForm({
    defaultValues: {
      name: '',
      description: '',
    }
  })

  const handleSubmit = methods.handleSubmit((data) => {
    createOrganization(data)
  })

  useEffect(() => {
    if (result.isSuccess) {
      navigate('/')
    }
  }, [result])

  return (
    <FormProvider {...methods}>
      <StepCompany
        onSubmit={handleSubmit}
      />
    </FormProvider>
  )
}
