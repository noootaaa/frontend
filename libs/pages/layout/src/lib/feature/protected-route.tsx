import { PropsWithChildren } from 'react';
import { useOidc } from '@axa-fr/react-oidc';

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { login, isAuthenticated } = useOidc()


  if (!isAuthenticated) {
    login('/home')
    return null
  }

  return children
}
