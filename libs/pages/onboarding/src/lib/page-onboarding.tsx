import { Route, Routes, useParams } from 'react-router';
import { ROUTER_ONBOARDING } from './router';
import { Container } from './feature/container';

export function PageOnboarding() {
  const params = useParams()

  console.log(params['*'])
  return (
    <Container params={params}>
      <Routes>
        {ROUTER_ONBOARDING.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </Container>

  )
}
