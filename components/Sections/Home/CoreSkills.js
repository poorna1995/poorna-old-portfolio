/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Divider, Grid, Icon, Typography } from "@mui/material";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import WireFraming from "components/Icons/WireFraming";
import LeaderShipIcon from "components/Icons/CoreSkillsIcon/LeaderShipIcon";
import DesignComponentIcon from "components/Icons/WhatIdoIcons/DesignComponentIcon";
import TeamManagementIcon from "components/Icons/CoreSkillsIcon/TeamManagementIcon";
import Adaptability from "components/Icons/CoreSkillsIcon/Adaptability";
function CoreSkills() {
	const cardItems = [
		{
			title: "Cross functional Collaboration ",

			icon: <DesignComponentIcon />,
		},
		{
			title: "Intercultural communication ",
			icon: <DesignComponentIcon />,
		},
		{
			title: "Leadership ",
			icon: <LeaderShipIcon />,
		},
		{
			title: "Team Management",
			icon: <TeamManagementIcon />,
		},
		{
			title: "Adaptability",
			icon: <Adaptability />,
		},
	];
	return (
		<>
			<Box sx={{ flexGrow: 1, marginTop: "80px" }}>
				<Grid container spacing={2} columns={13}>
					<Grid item xs={6}>
						<Typography
							sx={{
								fontSize: "46px",
								fontWeight: "800",
								marginBottom: "30px",
							}}
						>
							Core Skills
						</Typography>
					</Grid>

					<Box sx={{ display: "flex", flexDirection: "column" }}>
						{cardItems.map((cardItem) => {
							return (
								<Box>
									<Grid
										container
										spacing={4}
										direction="row"
										p={2}
									>
										<Grid item>
											<Icon
												sx={{
													width: "40px",
													height: "40px",
												}}
											>
												{cardItem.icon}
											</Icon>
										</Grid>
										<Grid item>
											<Typography
												sx={{
													fontSize: "32px",
													fontWeight: "600",
													// paddingTop: "12px",
												}}
											>
												{cardItem.title}
											</Typography>
										</Grid>
									</Grid>
									<Divider
										sx={{
											marginTop: "20px",
											marginBottom: "20px",
										}}
									/>
								</Box>
							);
						})}
					</Box>

					{/* <Box>
								<Grid container spacing={4} direction="row">
									<Grid item>
										<Icon>
											<LinkedinIcon />{" "}
										</Icon>
									</Grid>
									<Grid item>
										<Typography>Design</Typography>
									</Grid>
								</Grid>
							</Box> */}
					{/* <Box>
								<Grid container spacing={4} direction="row">
									<Grid item>
										<Icon>
											<LinkedinIcon />{" "}
										</Icon>
									</Grid>
									<Grid item>
										<Typography>Design</Typography>
									</Grid>
								</Grid>
							</Box> */}
					{/* </Grid> */}
				</Grid>
			</Box>
		</>
	);
}

export default CoreSkills;
