/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import CircleIcon from "components/Icons/CircleIcon";
import React from "react";
const images = [
	{
		src: "/assets/AvocationImgs/4.jpg",
	},
	{
		src: "/assets/AvocationImgs/9.jpg",
	},
	{
		src: "/assets/AvocationImgs/11.jpg",
	},
	{
		src: "/assets/AvocationImgs/12.jpg",
	},
	{
		src: "/assets/AvocationImgs/5.jpg",
	},
	{
		src: "/assets/AvocationImgs/1.jpg",
	},
	{
		src: "/assets/AvocationImgs/3.jpg",
	},
	{
		src: "/assets/AvocationImgs/7.jpg",
	},
	{
		src: "/assets/AvocationImgs/8.jpg",
	},
	{
		src: "/assets/AvocationImgs/10.jpg",
	},
	{
		src: "/assets/AvocationImgs/2.jpg",
	},
	{
		src: "/assets/AvocationImgs/6.jpg",
	},
];
function AvocationDetail({handleCloseDrawer}) {
   
    

	return (
		<>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Grid container spacing={2} alignItems="center">
						{images.map((image) => (
							<>
								<Grid item xs={12} sm={6}>
									<img
										style={{
											width: "400px",

											height: "400px",
											objectFit: "contain",
											cursor: "pointer",
										}}
										src={image.src}
										// src="/assets/AvocationImgs/4.jpg"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Box>
										<Typography variant="h5" gutterBottom>
											Power and Strength
										</Typography>
										<Typography
											variant="body1"
											gutterBottom
										>
											Wolves are often seen as powerful
											and strong animals, capable of
											taking down large prey and surviving
											in harsh environments. As a result,
											wolf paintings can symbolize
											strength and power, representing the
											idea of resilience and the ability
											to overcome obstacles.
										</Typography>
									</Box>
								</Grid>
							</>
						))}
					</Grid>
				</Box>
			</Container>
		</>
	);
}

export default AvocationDetail;
