import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		// fontFamily: "Inter, sans-serif",
		// fontFamily: "Plus Jakarta Sans, sans-serif",
		fontFamily: "Satoshi, sans-serif, !important",

		// fontWeight:"500"
	},
	palette: {
		primary: {
			main: "#2a2a2a",
			hover: "#00000",
		},
		background: {
			default: "#fff",
		},

		text: {
			primary: "#1D2939",
		},
		grey: {
			800: "#1D2939",
			700: "#344054",
			600: "#475467",
			500: "#667085",
			400: "#98A2B3",
			300: "#D0D5DD",
			200: "#E4E7EC",
			50: "#F9FAFB",
		},
		blue: {
			50: "#F0F9FF",
		},
		red: {
			600: `#d92d20`,
		},
		green: {
			500: "#12b76a",
		},
		action: {
			// active,
			// disabled,
			// disabledBackground,
			// focus,
			// focusOpacity,
			// hoverOpacity,
			// selected,
			// selectedOpacity,
			// activatedOpacity,
			// disabledOpacity,
		},
	},
});

export default theme;
