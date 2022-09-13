import GlobalStyle from "../Global.styled";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      theme={{
        colors: {
          accent: "#6eb916",
          white: "#fff",
        },
      }}
    >
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
