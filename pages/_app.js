import "styles/globals.css";
// import "styles/satoshi.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "theme";
import { satoshi } from "styles/fonts";

function MyApp({ Component, pageProps }) {
	return (
		<main className={satoshi.className}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</main>
	);
}

export default MyApp;
