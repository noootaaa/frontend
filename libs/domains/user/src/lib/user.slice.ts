import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { SetUserPayload, UserEntity, UserState } from '@nooota/contracts';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { RootState } from '@nooota/state/store'

export const USER_KEY = 'user'

export const initialUserState: UserState = {
  isLoading: true,
  isAuthenticated: false,
  permissions: [],
}

export const userSlice = createSlice({
  name: USER_KEY,
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: SetUserPayload) => {
      state.isLoading = false
      state.isAuthenticated = !!action.payload.user
      state.user = action.payload.user
      state.token = action.payload.token
      state.permissions = Object.values(action.payload.user.resource_access).flatMap((resource ) => {
        return (resource as { roles: string[] }).roles
      })
    }
  },
  extraReducers: (builder) => {}
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions

export const getUserState = (root: RootState) => root[USER_KEY]
