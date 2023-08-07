import "../styles/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
