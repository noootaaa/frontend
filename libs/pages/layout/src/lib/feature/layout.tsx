import { PropsWithChildren } from 'react'
import { LayoutPage } from '../ui/layout-page'

export function Layout({ children }: PropsWithChildren) {



  return (
   <LayoutPage>
     {children}
   </LayoutPage>
  )
}
