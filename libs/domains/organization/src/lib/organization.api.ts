import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@nooota/state/store';
import { OrganizationEntity } from '@nooota/contracts';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3333',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { user } = getState() as RootState

    headers.set('Authorization', `Bearer ${user.token}`)
  }
})

export const organizationApi = createApi({
  reducerPath: 'organizationApi',
  baseQuery,
  tagTypes: ['organization'],
  endpoints: (builder) => ({
    getOrganizationById: builder.query<any, string>({
      query: (organizationId) => `/v1/organizations/${organizationId}`
    }),
    getMeOrganization: builder.query<OrganizationEntity, void>({
      query: () => '/v1/organizations/me',
      providesTags: ['organization']
    }),
    createOrganization: builder.mutation<any, any>({
      query: (payload) => ({
        url: `/v1/organizations`,
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['organization']
    })
  })
})

export const {
  useGetOrganizationByIdQuery,
  useGetMeOrganizationQuery,
  useCreateOrganizationMutation
} = organizationApi
