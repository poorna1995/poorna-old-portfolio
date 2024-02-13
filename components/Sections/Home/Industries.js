/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Divider, Grid, Icon, Typography } from "@mui/material";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import BasicCard from "components/Common/BasicCard";
import EnterIcon from "components/Icons/IndustriesIcon/EnterIcon";
import Networking from "components/Icons/IndustriesIcon/Networking";
import EcomIcon from "components/Icons/IndustriesIcon/EcomIcon";
import RetailIcon from "components/Icons/IndustriesIcon/RetailIcon";
function Industries() {
	const cardItems = [
		{
			title: "Networking",
			icon: <Networking />,
		},
		{
			title: "Ecommerce",
			icon: <EcomIcon />,
		},
		{
			title: "Entertainment",
			icon: <EnterIcon />,
		},
		{
			title: "Finance",
			icon: <RetailIcon />,
		},
		{
			title: "Retail",
			icon: <RetailIcon />,
		},
		{
			title: "Construction",
			icon: <RetailIcon />,
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
					marginLeft: "48px",
				}}
			>
				Industries I have Worked
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
									borderRadius:"10px",
									boxShadow:"none",
									border:"1px solid #f4f4f4",
									"&:hover": {
										backgroundColor: "white",
										border: "1px solid black",
										color:"#000000",
	
									},
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

export default Industries;
