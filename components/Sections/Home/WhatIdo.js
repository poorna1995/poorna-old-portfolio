/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Divider, Grid, Icon, Typography } from "@mui/material";
import BasicCard from "components/Common/BasicCard";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import WireFraming from "components/Icons/WireFraming";
import UserResearch from "components/Icons/WhatIdoIcons/UserResearch";
import DesignComponentIcon from "components/Icons/WhatIdoIcons/DesignComponentIcon";
import VisualIcon from "components/Icons/WhatIdoIcons/VisualIcon";
import InteractiveIcon from "components/Icons/WhatIdoIcons/InteractiveIcon";
import ResponsiveDesignIcon from "components/Icons/WhatIdoIcons/ResponsiveDesignIcon";
function WhatIdo() {
	const cardItems = [
		{
			title: "User Research",
			icon: <UserResearch />,
		},
		{
			title: "Design Component Research",
			icon: <DesignComponentIcon />,
		},
		{
			title: "Wireframing",
			icon: <WireFraming />,
		},
		{
			title: "Visual Communication",
			icon: <VisualIcon />,
		},
		{
			title: "Interactive design",
			icon: <InteractiveIcon />,
		},
		{
			title: "Responsive Design",
			icon: <ResponsiveDesignIcon />,
		},
	];
	return (
		<>
			<Typography
				sx={{
					fontSize: "48px",
					fontWeight: "800",
					marginBottom: "30px",
					marginTop: "80px",
				}}
			>
				What I do
			</Typography>
			<Grid container spacing={4} direction="row">
				{cardItems.map((cardItem) => {
					return (
						<Grid item>
							<BasicCard
								sx={{
									width: "360px",
									height: "180px",
									backgroundColor: "#F4F4F4",
									boxShadow:"none",
									borderRadius:"10px"
								}}
								title={cardItem.title}
								icon={cardItem.icon}
							/>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
}

export default WhatIdo;
