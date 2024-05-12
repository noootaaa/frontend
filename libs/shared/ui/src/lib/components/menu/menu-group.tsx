import { MenuItemProps } from './menu-item';
import { ReactNode, useEffect, useState } from 'react';
import { sortByKey } from '@nooota/utils';

export interface MenuGroupProps {
  menu: {
    items: MenuItemProps[]
    label?: string
    title?: string
    sortAlphabetically?: boolean
    button?: {
      label?: string | ReactNode
      onClick?: () => void
    }
    search?: boolean
  }
  isLast: boolean
  paddingMenuY?: number
  paddingMenuX?: number
  style?: object
  isFilter?: boolean
  dontOrderAlphabetically?: boolean
}

export function MenuGroup(props: MenuGroupProps) {
  const {
    menu = { items: [] },
    isLast = true,
    paddingMenuX = 12,
    paddingMenuY = 12,
    style = {},
    isFilter
  } = props

  const [currentItems, setCurrentItems] = useState(menu.items)
  const [filteredItems, setFilteredItems] = useState(menu.items)
  const [currentSearch, setCurrentSearch] = useState<string>('')

  useEffect(() => {
    setCurrentItems(menu.items)
  }, [menu.items])

  useEffect(() => {
    const filtered = currentItems.filter((item) => {
      if (!item.name) return true
      return item.name?.toUpperCase().includes(currentSearch.toUpperCase())
    })

    setFilteredItems(menu.sortAlphabetically ? sortByKey(filtered, 'name') : filtered)
  }, [currentItems, currentSearch, menu.sortAlphabetically])

  function filteredData(value: string) {
    setCurrentSearch(value)
  }

  const paddingStyle = {
    paddingTop: paddingMenuY,
    paddingBottom: paddingMenuY,
    paddingLeft: paddingMenuX,
    paddingRight: paddingMenuX,
  }

  const headPaddingStyle = {
    paddingTop: paddingMenuY,
    paddingLeft: paddingMenuX,
    paddingRight: paddingMenuX,
  }

  return (
    <div style={style}>
      {!isFilter && menu?.title && (
        <div className="flex justify-between items-center" style={headPaddingStyle}>
          {menu?.title && (
            <p data-testid="title" className="text-sm text-neutral-350">
              {menu?.title}
            </p>
          )}

          {menu?.button && (
            <span
              className="link text-sm text-brand-500 cursor-pointer font-medium inline-block"
              onClick={menu?.button.onClick}
            >
              {menu?.button.label}
            </span>
          )}
        </div>
      )}

      {menu.search && (
        <div>

        </div>
      )}

    </div>
  )

}
