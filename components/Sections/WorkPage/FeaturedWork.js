/* eslint-disable react/jsx-key */
import React from "react";
import { Box, Divider, Grid, Icon, Typography } from "@mui/material";
import Crafter from "public/assets/Crafter.jpg";
import Bluecom from "public/assets/BluecomImage.png";
import Networking from "public/assets/Networking.jpg";
import Shopconnect from "public/assets/Shopconnect.jpg";
import Lattis from "public/assets/LattisImage.png";
import Zello from "public/assets/ZelloImage.png";
import Calpad from "public/assets/CalpadImage.png";
import MediaCard from "components/Common/MediaCard";
import CircleIcon from "components/Icons/CircleIcon";
function WhatIdo() {
	const cardItems = [
		{
			title: "Lattis.ai",
			description1: "Product Designer",
			description2: "Dev Handsoffn",
			description3: "Marketing",
			description4: "Logo Design",
			image: Lattis.src,
			label: "B2B",
		},

		{
			title: "Bluecom",
			description1: "UX/UI Design",
			description2: "Dev Handsoffn",
			description3: "Marketing",
			description4: "Logo Design",
			image: Bluecom.src,
            label:"B2B"
		},
		{
			title: "Hivepath",
			description1: "UX/UI Design",
			description2: "Dev Handsoffn",
			description3: "Marketing",
			description4: "Logo Design",
            image: Networking.src,
            label:"B2C"
		},
		{
			title: "Zello",
			description1: "UX/UI Design",
			description2: "Dev Handsoffn",
			description3: "Marketing",
			description4: "Logo Design",
            image: Zello.src,
            label:"B2C"
		},
		
		{
			title: "Calpad",
			description1: "UX/UI Design",
			description2: "Dev Handsoffn",
			description3: "Marketing",
			description4: "Logo Design",
			image: Calpad.src,
			label: "B2C",
		},
		{
			title: "Bluecom Central",
			description1: "UX/UI Design",
			description2: "Dev Handsoffn",
			description3: "Marketing",
			description4: "Logo Design",
			image: Zello.src,
			label: "B2C",
		},
		{
			title: "Shopconnect",
			description1: "UX/UI Design",
			// description2:"Dev Handsoffn",
			description3: "Marketing",
			description4: "User Experience Excellence",
            image: Shopconnect.src,
            label:"B2B"
		},

		{
			title: "Crafter",
			description1: "UX/UI Design",
			description2: "Dev Handsoffn",
			description3: "Marketing",
			description4: "Logo Design",
            image: Crafter.src,
            label:"B2C"
		},
	];
	return (
		<>
			<Typography
				sx={{
					fontSize: "48px",
					fontWeight: "800",
					marginBottom: "50px",
				
				}}
			>
			“Design is not a thing <br/>
you do  —  way of life.”
			</Typography>
			<Grid container spacing={4} direction="row">
				{cardItems.map((cardItem) => {
					return (
						<Grid item>
							<MediaCard
								sx={{ maxWidth: 345 }}
								title={cardItem.title}
								description1={cardItem.description1}
								description2={cardItem.description2}
								description3={cardItem.description3}
								description4={cardItem.description4}
								image={cardItem.image}
							   
                               
                                label={cardItem.label}




                                
							/>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
}

export default WhatIdo;
