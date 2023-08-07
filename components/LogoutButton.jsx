import Button from '@mui/material/Button';
import { useEffect } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
export default function LogoutButton() {

  const { user, error, isLoading } = useUser();
  if (!isLoading) {
    console.log("user:", user)
  }

  const handleRedirect = () => {
    window.location.href = "/api/auth/logout";
  };

  return (
    <Button variant="outlined" onClick={() => handleRedirect()}>Log out</Button>
  );
};
