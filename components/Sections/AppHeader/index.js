import React from "react";
import Tab from "components/Common/Tab";
import { createTheme } from "@mui/material";
import { Box, Container, Grid, Typography } from "@mui/material";
function index() {
	return (
		<Container
			sx={{
				width: "1150px",
				display: "flex",
				// height:"140px",
				alignItem: "center",
				justifyContent: "space-between",
				fontFamily: "Satoshi, sans-serif, !important",

				position: "fixed",
				top: "0",
				zIndex: "1000",
			}}
		>
			{/* <Typography
				sx={{
					fontSize: "32px",
					fontWeight: "700",
					marginBottom: "120px",
					marginTop: "46px",
				}}
			>
				P.
			</Typography> */}
			<Tab />
		</Container>
	);
}

export default index;
