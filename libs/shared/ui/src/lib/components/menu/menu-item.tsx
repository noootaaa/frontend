import { ReactNode } from 'react';
import { type ClickEvent } from '@szhsin/react-menu';
import { useNavigate } from 'react-router';
import { classNames } from '@nooota/utils';
import { Truncate } from '../truncate/truncate';

export interface MenuItemProps {
  name?: string
  link?: { url: string, external?: boolean }
  contentLeft?: ReactNode
  contentRight?: ReactNode
  onClick?: (e: ClickEvent) => void
  copy?: string
  copyTooltip?: string
  containerClassName?: string
  className?: string
  textClassName?: string
  isActive?: boolean
  truncateLimit?: number
  disabled?: boolean
  itemContentCustom?: ReactNode
  tooltip?: string
}

export function MenuItem(props: MenuItemProps) {
  const {
    name,
    link,
    contentLeft,
    contentRight,
    onClick,
    copy,
    copyTooltip,
    isActive = false,
    textClassName = 'text-neutral-400 dark:text-neutral-100',
    className = '',
    containerClassName = '',
    truncateLimit = 34,
    disabled = false,
    itemContentCustom,
    tooltip,
  } = props

  const navigate = useNavigate()
  const disabledClassName = disabled ? 'opacity-50 cursor-not-allowed' : ''

  const itemContent = itemContentCustom
    ? itemContentCustom
    : (
      <>
        <div className={classNames('flex items-center truncate', className)}>
          {contentLeft && (
            <span className='mr-3' data-testid="menu-icon">
              {contentLeft}
            </span>
          )}
          {name && (
            <span className={`menu-item__name text-sm font-medium ${textClassName}`}>
						  <Truncate text={name} truncateLimit={truncateLimit} />
					  </span>
          )}
        </div>

        <div className="flex items-center">{contentRight && <span className="ml-3">{contentRight}</span>}</div>
      </>
    )
}
