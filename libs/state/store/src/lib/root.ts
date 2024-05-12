import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { userReducer } from '@nooota/domains/user'
import { organizationApi, organizationReducer } from '@nooota/domains/organization';

export const rootReducer = combineReducers({
  user: userReducer,
  organization: organizationReducer,
  [organizationApi.reducerPath]: organizationApi.reducer
})

export function setupStore(preloadedState?: never) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true
      })
        .concat(organizationApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
