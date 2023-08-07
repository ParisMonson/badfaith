import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_DOMAIN,
    }),
    // ...add more providers here
  ],
};

{
  /* <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/auth0/callback", // Redirect url after login, // useAuth0()
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider> */
}

export default NextAuth(authOptions);
