import React from "react";
import Footer from "components/Sections/Footer";
import { Box, Container } from "@mui/material";
import Avocation from "components/Sections/Avocation";
import AppHeader from "components/Sections/AppHeader";
function AvocationPage() {
	return (
		<Box sx={{ display: "flex" }}>
			<Box sx={{ maxHeight: "100vh", overflowY: "scroll", flex: "1" }}>
				<Container maxWidth="lg">
					<AppHeader />
				</Container>
				<Container maxWidth="lg" sx={{marginTop:"150px"}}>
					<Avocation />
					<Footer />
				</Container>
			</Box>
		</Box>
	);
}

export default AvocationPage;
