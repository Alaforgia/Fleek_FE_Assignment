import "../styles/globals.css";

import { ThemeProvider } from "@mui/material/styles";

// Redux
import { Provider } from "react-redux";
import { store } from "../src/store/store";

// Types
import type { AppProps } from "next/app";

// MUI Components
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
