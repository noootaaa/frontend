import { createSlice } from '@reduxjs/toolkit/react';
import { RootState } from '@nooota/state/store';
import { OrganizationState } from '@nooota/contracts';

export const ORGANIZATION_KEY = 'organization'

export const initialOrganization: OrganizationState = {
  organization: undefined,
}

export const organizationSlice = createSlice({
  name: ORGANIZATION_KEY,
  initialState: initialOrganization,
  reducers: {
    setOrganization(state, action) {
      state.organization = action.payload
    },
    setStepInformation(state, action) {
      state.stepInformation = action.payload
    },
  },
})

export const organizationReducer = organizationSlice.reducer
export const organizationActions = organizationSlice.actions

export const getOrganizationState = (root: RootState) => root[ORGANIZATION_KEY]
