import "../styles/globals.css";

// Redux
import { Provider } from "react-redux";
import { store } from "../src/store/store";

// Types
import type { AppProps } from "next/app";

// MUI Components
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
