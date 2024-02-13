import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import PrimaryButton from "../Button/PrimaryButton";
import StatusChip from "../Chip/StatusChip";

export default function Index({
	sx,
	image,
	title,
	description1,
	description2,
	description3,
	description4,
	label,
}) {
	return (
		<Card
			sx={{
				
				height: 456,
				width: 546,
				// backgroundColor: "#F6F6F6",
				backgroundColor:"#fffff",
				boxShadow: "none",
				border: "1px solid #e5e5e5",
				borderRadius:"10px",
				"&:hover": {
					background: "white",
					// borderColor: "#000000",
					boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
				},
				
			}}
		>
			<CardMedia
				sx={{ height: 250, width: 546, objectFit: "contain" }}
				image={image}
			/>

			<CardContent>
				<Typography sx={{ fontSize: "38px", fontWeight: 800 }}>
					{title}
				</Typography>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography
						sx={{
							color: "#535353",
							fontSize: "18px",
							marginRight: "8px",
						}}
					>
						{description1}
					</Typography>

					<Typography
						sx={{
							color: "#535353",
							fontSize: "18px",
							marginX: "8px",
						}}
					>
						{description2}
					</Typography>
					<Typography
						sx={{
							color: "#535353",
							fontSize: "18px",
							marginX: "8px",
						}}
					>
						{description3}
					</Typography>

					<Typography
						sx={{
							color: "#535353",
							fontSize: "18px",
							marginLeft: "8px",
						}}
					>
						{description4}
					</Typography>
				</Box>
			</CardContent>
			<CardActions>
				<StatusChip
					sx={{
						backgroundColor: "#D6E3F3",
						borderRadius: "20px",
						color: "#000000",
						height: "40px",
					}}
					label={label}
				/>
				
			</CardActions>
		</Card>
	);
}
