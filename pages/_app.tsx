import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
// import theme from "../src/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //<ThemeProvider>
      <Component {...pageProps} />
    //</ThemeProvider>
  );
}

export default MyApp;
