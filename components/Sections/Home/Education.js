/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { createTheme } from "@mui/material";
import { Box, Divider, Grid, Icon, Typography } from "@mui/material";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import School1 from "public/assets/School1.png";
import School2 from "public/assets/School2.png";
const imageFirst = School1.src;
const imageSecond = School2.src;
function Education() {
	const cardItems = [
		{
			title: "Design Boat School",
			icon: imageFirst,
			description: "UX/UI  Certification",
			date: "2019-2020",
		},
		{
			title: "Sri Venkateswara University",
			icon: imageSecond,
			description: "B.tech in Chemical Engineering",
			date: "2013-2017",
		},
	];
	return (
		<>
			<Typography
				sx={{
					fontSize: "48px",
					fontWeight: "800",
					marginBottom: "16px",
					marginTop: "80px",
					

				}}
			>
				Education
			</Typography>
			<Grid container spacing={2} direction="column" >
				<Grid item>
					{cardItems.map((cardItem) => (
						<>
							<Box
								// key={item}
								sx={{
									display: "flex",
									alignItems: "center",
									// flex: "1",
									width:"700px"
								}}
							>
								<img
									style={{
										width: "50px",
										height: "58px",
										marginRight: "32px",
									}}
									src={cardItem.icon}
								/>
								<Box sx={{display:"flex", flexDirection:"column",flex: 1,}}>
								<Typography  sx={{ flex: 1, fontSize:"30px", fontWeight:"700", fontFamily: "Satoshi, sans-serif, !important"}}>
									{cardItem.title}
									{/* <br />
									<span style={{ fontSize: "18px",fontWeight:"500"  }}>
										{cardItem.description}
									</span> */}
								</Typography>
								<Typography sx={{fontSize:"18px",fontWeight:"600"}} >{cardItem.description}</Typography>
								</Box>
								

								<Typography
									variant="body1"
									sx={{ marginLeft: "24px" }}
								>
									{cardItem.date}
								</Typography>
							</Box>
							<Divider sx={{ marginY: "20px", width:"700px" }} />
						</>
					))}
				</Grid>
			</Grid>
		</>
	);
}

export default Education;
