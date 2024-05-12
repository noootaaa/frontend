import { ReactElement } from 'react';

export * from './lib/entities'
export * from './lib/states'

export interface Route {
  component: ReactElement
  path: string
}
