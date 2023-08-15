import Button from "@mui/material/Button";
import Link from "next/link";
import { useEffect } from "react";

export default function LoginButton() {
  const handleRedirect = () => {
    window.location.href = "/api/auth/callback";
  };

  return (
    <Button variant="outlined" onClick={() => handleRedirect()}>
      Log in
    </Button>
  );
}
