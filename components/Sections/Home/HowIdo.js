import React from "react";
import { Box, Divider, Grid, Icon, Typography } from "@mui/material";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import XdIcon from "components/Icons/HowIdoIcons/XdIcon";
import CssIcon from "components/Icons/HowIdoIcons/CssIcon";
import AfterEffectIcon from "components/Icons/HowIdoIcons/AfterEffectIcon";
import AdobeIllustratorIcon from "components/Icons/HowIdoIcons/AdobeIllustratorIcon";
import PhotoShopIcon from "components/Icons/HowIdoIcons/PhotoShopIcon";
import FramerIcon from "components/Icons/HowIdoIcons/Framer";
import ReactIcon from "components/Icons/HowIdoIcons/ReactIcon";
import HtmlIcon from "components/Icons/HowIdoIcons/HtmlIcon";
import Figma from "public/assets/Figma.png";
import FigmaIcon from "components/Icons/HowIdoIcons/FigmaIcon";
function HowIdo() {
	return (
		<>
			<Box sx={{ flexGrow: 1, marginTop: "80px" }}>
				<Grid container spacing={2} columns={14}>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontSize: "48px",
								fontWeight: "800",
								marginBottom: "30px",
							}}
						>
							How I do
						</Typography>
					</Grid>
					<Grid item xs={8}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								marginBottom: "32px",
							}}
						>
							<Typography
								sx={{
									fontSize: "28px",
									fontWeight: "700",
									marginBottom: "24px",
								}}
							>
								Design Tools
							</Typography>
							<Grid container spacing={4} direction="row">
								<Grid item>
									<Icon sx={{width:"90px", height:"90px"}}>
										<XdIcon/>{" "}
									</Icon>
								</Grid>
								<Grid item>
								<Icon sx={{width:"90px", height:"90px"}}>
										<AfterEffectIcon />{" "}
									</Icon>
								</Grid>
								<Grid item>
								<Icon sx={{width:"90px", height:"90px"}}>
										<AdobeIllustratorIcon />{" "}
									</Icon>
								</Grid>
								<Grid item>
								<Icon sx={{width:"90px", height:"90px"}}>
										<PhotoShopIcon/>{" "}
									</Icon>
								</Grid>
								<Grid item>
								<Icon sx={{width:"90px", height:"90px"}}>
									<FigmaIcon/>
									</Icon>
								</Grid>
								<Grid item>
								<Icon sx={{width:"90px", height:"90px"}}>
									<FramerIcon/>
									</Icon>
								</Grid>
							</Grid>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Typography
								sx={{
									fontSize: "28px",
									fontWeight: "700",
									marginBottom: "24px",
									marginTop:"36px"
								}}
							>
								Frontend Tools
							</Typography>
							<Grid container spacing={4} direction="row">
								<Grid item>
								<Icon sx={{width:"90px", height:"90px"}}>
										<ReactIcon />{" "}
									</Icon>
								</Grid>
								<Grid item>
								<Icon sx={{width:"90px", height:"90px"}}>
										<HtmlIcon />{" "}
									</Icon>
								</Grid>
								
								<Grid item>
								<Icon sx={{width:"90px", height:"90px"}}>
                                <CssIcon />{" "}
									</Icon>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default HowIdo;
