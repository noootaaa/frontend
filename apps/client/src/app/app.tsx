import { useOidc, useOidcAccessToken } from '@axa-fr/react-oidc';
import { useDispatch, useSelector } from 'react-redux';
import { getUserState, userActions } from '@nooota/domains/user';
import { useEffect } from 'react';
import { AppDispatch } from '@nooota/state/store';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';
import { ROUTER } from './router.main';
import { match } from 'ts-pattern';
import { Layout, ProtectedRoute } from '@nooota/pages/layout';
import { LoadingScreen } from '@nooota/ui';
import { getOrganizationState, organizationActions, useGetMeOrganizationQuery } from '@nooota/domains/organization';

export default function App() {
  const { isLoading } = useSelector(getUserState)
  const navigate = useNavigate()
  const { organization } = useSelector(getOrganizationState)
  const { pathname } = useLocation()
  const { login, isAuthenticated } = useOidc()
  const dispatch = useDispatch<AppDispatch>()
  const { accessToken, accessTokenPayload } = useOidcAccessToken()

  const { data: organizationResponse } = useGetMeOrganizationQuery(undefined, {
    skip: isLoading
  })

  useEffect(() => {
    console.log(organizationResponse)
    if (!isLoading) {
      dispatch(organizationActions.setOrganization(organizationResponse ?? null))
    }

  }, [dispatch, organizationResponse])

  useEffect(() => {
    if (!isAuthenticated) {
      login('/home')
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (accessToken && accessTokenPayload) {
      console.log(accessToken);
      dispatch(userActions.setUser({
        user: accessTokenPayload,
        token: accessToken
      }))
    }
  }, [accessToken, accessTokenPayload, dispatch])

  console.log(organization)

  useEffect(() => {
    console.log(organization, typeof organization)
    if (organization === null && !pathname.includes('onboarding')) {
      navigate('/onboarding/company')
    }
  }, [organization])

  if ((isLoading || organization === undefined) && !pathname.includes('authentication')) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <div>
      <Toaster />

      <Routes>
        {ROUTER.map((route) =>
          match(route)
            .when((r) => r.layout, (r) => (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <Layout>
                    {r.protected ? <ProtectedRoute>{r.component}</ProtectedRoute> : r.component}
                  </Layout>
                }
              />
            ))
            .otherwise((r) => (
              <Route
                key={r.path}
                path={r.path}
                element={r.component}
              />
            ))
        )}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  )
}
