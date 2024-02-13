/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { createTheme } from "@mui/material";
import Tab from "components/Common/Tab";
import Footer from "components/Sections/Footer";
import { Box, Container, Typography } from "@mui/material";
import AboutMe from "components/Sections/AboutMePages/AboutMe";
import AppHeader from "components/Sections/AppHeader";
import VerticalTimeline from "components/VerticalTimeline";
import WhatOtherSaying from "components/Sections/Home/WhatOtherSaying";
import Education from "components/Sections/Home/Education";
import WhatIdo from "components/Sections/Home/WhatIdo";
import CoreSkills from "components/Sections/Home/CoreSkills";
import HowIdo from "components/Sections/Home/HowIdo";
function AboutPage() {
	return (
		<Box sx={{ display: "flex" }}>
			<Box sx={{ maxHeight: "100vh", overflowY: "scroll", flex: "1" }}>
			<Container maxWidth="lg">
						<AppHeader />
						</Container>
						<Container maxWidth="lg" sx={{marginTop:"150px"}}>
					 <AboutMe />
					<Typography
						sx={{
							fontSize: "48px",
							fontWeight: "800",
							marginBottom: "16px",
							marginTop: "80px",
						}}
					>
						Companies I've worked
					</Typography>

					<VerticalTimeline /> 
					<Education/>
					<WhatIdo/>
					<CoreSkills/>
					<HowIdo/>
					<WhatOtherSaying/>
					<Footer /> 
				</Container>
			</Box>
		</Box>
	);
}

export default AboutPage;
