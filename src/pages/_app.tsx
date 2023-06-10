import "@/styles/globals.css";
import type { AppProps } from "next/app";
// 1. import `ChakraProvider` component
import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  const config: ThemeConfig = {
    initialColorMode: "light", // 'dark' | 'light'
    useSystemColorMode: false,
  };

  // 3. extend the theme
  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
