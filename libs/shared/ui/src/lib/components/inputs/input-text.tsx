import React, { ChangeEventHandler, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { classNames } from '@nooota/utils';
import { Icon } from '@nooota/ui';

export interface InputTextProps {
  name: string
  label: string
  value?: string | number | undefined
  type?: 'text' | 'number' | 'password' | 'email' | 'date' | 'datetime' | 'time'
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  error?: string
  disabled?: boolean
  dataTestId?: string
  rightElement?: ReactNode
  customRef?: RefObject<HTMLInputElement>
  onKeyDownCapture?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function InputText ({
   name, label, value = '', type = 'text', onChange,
   error, className = '', disabled, rightElement, dataTestId, customRef, onKeyDownCapture
}: InputTextProps) {
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)

  const [currentValue, setCurrentValue] = useState(value)
  const [currentType, setCurrentType] = useState(type)

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const hasFocus = focused
  const hasLabelUp =
    hasFocus || (currentValue?.toString() && currentValue?.toString().length > 0) ? 'input--label-up' : ''

  const hasError = error && error.length > 0 ? 'input-error' : ''

  const inputActions = hasFocus ? 'input-focused' : disabled ? 'input-disabled' : ''

  const isDisabled = disabled ? 'input--disabled !border-neutral-250' : ''

  const displayPicker = () => {
    const input = inputRef.current?.querySelector('input')
    if (!disabled && input) input.showPicker()
  }

  const isInputDate = type === 'time' || type === 'date' || type === 'datetime'

  return (
    <div
      className={classNames(className)}
      onClick={() => (isInputDate ? displayPicker() : inputRef.current?.querySelector('input')?.focus())}
      date-testid={`${dataTestId || 'input-text'}-wrapper`}
    >

      <div className="relative">
        <div
          aria-label="input-container"
          className={classNames('input', inputActions, className, isDisabled, hasError, hasLabelUp)}
          ref={inputRef}
        >
          <div className={classNames(disabled ? 'pointer-events-none' : '')}>
            <label htmlFor={label} className={classNames(hasFocus ? 'text-xs' : 'text-sm translate-y-2')}>
              {label}
            </label>

            <input
              data-testid={dataTestId || 'input-text'}
              ref={customRef}
              name={name}
              id={label}
              autoComplete={"off"}
              className={classNames('input__value', rightElement ? '!pr-9' : '')}
              type={currentType}
              disabled={disabled}
              value={currentValue}
              onChange={(e) => {
                if (onChange) onChange(e)
                setCurrentValue(e.target.value)
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDownCapture={onKeyDownCapture}
            />

            {isInputDate && (
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <Icon name='uil:angle-down' className="text-sm text-neutral-400" />
              </div>
            )}

            {(currentValue as string)?.length > 0 && type === 'password' && (
              <div
                className="absolute top-1/2 -translate-y-1/2 right-4 transition-colors text-neutral-400 hover:text-neutral-400"
                onClick={() => (currentType === 'password' ? setCurrentType('text') : setCurrentType('password'))}
              >
                {currentType === 'password' && <Icon name={'ic:sharp-remove-red-eye'} className="text-sm" />}
                {currentType !== 'password' && <Icon name={'heroicons:eye-slash-16-solid'} className="text-sm" />}
              </div>
            )}
          </div>
        </div>

        {!isInputDate && rightElement && (
          <div
            data-testid="right-floating-component"
            className="absolute top-1/2 -translate-y-1/2 right-4"
          >
            {rightElement}
          </div>
        )}
      </div>
      {error && <p className="px-4 mt-1 font-medium text-xs text-red-500">{error}</p>}

    </div>
  )
}

