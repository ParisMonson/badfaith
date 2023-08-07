import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function Header() {
  return (
    <header className="header">
      <h1>Badfaith</h1>
    <LoginButton variant="outlined">Log in</LoginButton>
    <LogoutButton variant="outlined">Log out</LogoutButton>
    </header>
  );
};

