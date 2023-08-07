import "../styles/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/auth0/callback", // Redirect url after login, // useAuth0()
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
