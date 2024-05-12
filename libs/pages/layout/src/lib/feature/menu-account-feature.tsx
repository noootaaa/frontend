import { getUserState } from '@nooota/domains/user';
import { useSelector } from 'react-redux';
import { useOidc } from '@axa-fr/react-oidc';
import { LoaderSpinner } from '@nooota/ui';

export function MenuAccountFeature() {
  const { user } = useSelector(getUserState)
  const { logout } = useOidc()

  async function handleLogout() {
    await logout('/home')
  }

  return (
    <div>
      {user ? (
        <MenuAccount

        />
      ) : (
        <LoaderSpinner />
      )}
    </div>
  )
}
