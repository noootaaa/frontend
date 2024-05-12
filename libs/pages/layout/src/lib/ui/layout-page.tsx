import { PropsWithChildren } from 'react'
import { Navigation } from './navigation'

export function LayoutPage({ children }: PropsWithChildren) {
  return (
    <div>
      <main>
        <div className="flex h-full">
          <div className="h-full sticky top-0">
            <Navigation />
          </div>

          <div className="w-full flex flex-col max-h-full">
            <div className="h-full">
              {children}
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
