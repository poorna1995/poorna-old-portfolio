import { Card, CardContent, Typography, Box } from "@mui/material";
import { Icon } from "@mui/material";

const BasicCard = ({ title, icon, description, sx,icon2, description2,description3 }) => {
	return (
		<Card sx={sx}>
			<CardContent>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "left",
					marginTop:"16px",
				
					}}
				>
					<Icon sx={{ width:"50px",height:"50px"} }>{icon}</Icon>
					<Typography
						sx={{
							mt: 1,
							fontSize: "24px",
							fontWeight: "700",
						}}
					>
						{title}
					</Typography>
					<Typography sx={{fontSize:"18px", fontWeight:"600",marginBottom:"12px"}}>{description}</Typography>
					<Box sx={{display:"flex"}}>
					<Icon sx={{ width:"50px",height:"50px",marginRight:"12px"} }>{icon2}</Icon>
					<Box>
					<Typography sx={{fontWeight:"700",fontSize:"18px"}}>{description2}</Typography>
					<Typography  sx={{fontWeight:"500",fontSize:"14px"}}>{description3}</Typography>
					</Box>
					
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default BasicCard;
