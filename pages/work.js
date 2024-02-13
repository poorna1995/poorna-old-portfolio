import { Box, Container } from "@mui/material";
import MediaCard from "components/Common/MediaCard";
import SidePanel from "components/SidePanel";
import React from "react";
import Footer from "components/Sections/Footer";
import Tab from "components/Common/Tab";
import AppHeader from "components/Sections/AppHeader";
import FeaturedWork from "components/Sections/WorkPage/FeaturedWork";
function WorkPage() {
	return (
		<Box sx={{ display: "flex" }}>
			<Box sx={{ maxHeight: "100vh", overflowY: "scroll", flex: "1" }}>
			<Container maxWidth="lg">
						<AppHeader />
						</Container>
						<Container maxWidth="lg" sx={{marginTop:"150px"}}>
					<FeaturedWork />
					<Footer />
				</Container>
			</Box>
		</Box>
	);
}

export default WorkPage;
