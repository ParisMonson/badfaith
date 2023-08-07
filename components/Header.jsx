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
      <div className="flex gap-4">
        <h2>{user?.email}</h2>
      { !user ? (
        <LoginButton variant="outlined"/>
      ) : (
        <LogoutButton variant="outlined"/>
      )
      }
      </div>
    </header>
  );
};

