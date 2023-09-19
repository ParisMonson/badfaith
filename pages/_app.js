import "../styles/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import localFont from 'next/font/local'
import { CacheProvider } from "@emotion/react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "../utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();



const myFont = localFont( { src: './HKGrotesk-Regular.woff2', variable: '--font-hk'})

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <UserProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <main className={`${myFont.variable}`}>
          <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </CacheProvider>
    </UserProvider>
  );
}

export default MyApp;
