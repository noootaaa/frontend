import { useNavigate } from 'react-router';

export interface MenuAccountProps {
  user: {
    username?: string
    email?: string
    picture?: string
  }
  handleLogout: () => void
}

export function MenuAccount({ user, handleLogout }: MenuAccountProps) {
  const navigate = useNavigate()

}
