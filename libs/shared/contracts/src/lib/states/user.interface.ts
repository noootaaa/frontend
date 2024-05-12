import { JwtEntity } from '../entities'

export interface UserState {
  user?: JwtEntity
  token?: string
  isAuthenticated: boolean
  isLoading: boolean
  permissions: string[]
}

export interface SetUserPayload {
  payload: {
    user: JwtEntity
    token: string
  },
  type: string
}
