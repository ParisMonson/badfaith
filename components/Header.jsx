import { useUser } from '@auth0/nextjs-auth0/client';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function Header() {
  const { user, isLoading, error } = useUser();


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <header className="header">
      <h1>Badfaith</h1>
      { !user ? (
        <LoginButton variant="outlined">Log in</LoginButton>
      ) : (
        <LogoutButton variant="outlined">Log out</LogoutButton>
      )
      }
    </header>
  );
};

