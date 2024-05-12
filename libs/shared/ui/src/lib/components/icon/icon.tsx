import { Icon as IconFa } from '@iconify/react'

export interface IconProps {
  name: string
  width?: string
  height?: string
  viewBox?: string
  className?: string
  pathColor?: string
}

export function Icon(props: IconProps) {
  const formattedProps = { ...props }

  formattedProps.width = formattedProps.width || '24px'
  formattedProps.viewBox = formattedProps.viewBox || '0 0 24 24'
  formattedProps.className = 'shrink-0 ' + (formattedProps.className || '')

  return <IconFa icon={formattedProps.name} className={formattedProps.className} />
}
