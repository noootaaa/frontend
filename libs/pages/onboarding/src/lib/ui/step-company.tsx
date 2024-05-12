import { Button, ButtonSize, ButtonStyle, InputText, InputTextArea } from '@nooota/ui';
import { Controller, useFormContext } from 'react-hook-form';
import { useOidc } from '@axa-fr/react-oidc';

export interface StepCompanyProps {
  onSubmit: () => void
}

export function StepCompany({ onSubmit }: StepCompanyProps) {
  const { formState } = useFormContext()
  const { logout } = useOidc()
  return (
    <div className="pb-10">
      <h1 className="h3 text-neutral-400 mb-3">About your company</h1>
      <p className="text-sm mb-10 text-neutral-400">We need some information to proceed with your account creation.</p>
      <div>
        <div className="flex flex-col gap-4">
          <Controller
            name={"name"}
            rules={{
              required: 'Organization name is required',
            }}
            render={({ field, fieldState: { error }}) => (
              <InputText
                name={field.name}
                label={'Organization name'}
                value={field.value}
                onChange={field.onChange}
                error={error?.message}
              />
            )}
          />

          <Controller
            name={"description"}
            render={({ field, fieldState: { error }}) => (
              <InputTextArea
                name={field.name}
                label={'Organization description'}
                value={field.value}
                onChange={field.onChange}
                error={error?.message}
              />
            )}
          />
        </div>

        <div className="flex justify-between items-center mt-6">
          <div>
            <Button
              iconLeft={'material-symbols:arrow-left-alt-rounded'}
              style={ButtonStyle.STROKED}
              size={ButtonSize.LARGE}
              onClick={logout}
            >
              Disconnect
            </Button>
          </div>

          <div>
            <Button
              style={ButtonStyle.BASIC}
              size={ButtonSize.LARGE}
              disabled={!formState.isValid}
              onClick={onSubmit}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
