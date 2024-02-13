import { Box, Divider, Icon, List, ListItem, Typography } from "@mui/material";
import BehanceIcon from "components/Icons/BehanceIcon";
import CopyIcon from "components/Icons/CopyIcon";
import DribbleIcon from "components/Icons/DribbleIcon";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import ScrollToTopButton from "components/ScrollToTopButton";
import React from "react";

function index() {
	return (<>
		<Divider sx={{ marginY: "24px" , mt: "32px"}} />
		<Box sx={{ display: "flex", flexDirection: "column", mt: "32px",alignItems:"center",justifyContent:"center" }}>
			
			<Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
				Start by saying <span style={{ color: "#6E2594", fontWeight: "800" }}>Hi</span>,
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Typography
					sx={{
						fontSize: "44px",
						fontWeight: "800",
						marginBottom: "12px",
					}}
				>
					poorn7d@gmail.com
				</Typography>
				{/* <Icon
					sx={{
						marginBottom: "12px",
						marginLeft: "12px",
						cursor: "pointer",
					}}
				>
					{" "}
					<CopyIcon />
				</Icon> */}
			</Box>
			<Box
				sx={{
					marginBottom: "80px",
					display: "flex",
			
				}}
			>
				<Icon
					sx={{
						width: "50px",
						height: "50px",
						marginRight: "20px",
						cursor: "pointer",
					}}
					onClick={() => {
						window.open(
							"https://www.linkedin.com/in/poorna-praneesha-dayapule-67a69187/",
						);
					}}
				>
					{" "}
					<LinkedinIcon />
				</Icon>
				<Icon
					sx={{
						width: "50px",
						height: "50px",
						marginRight: "20px",
						cursor: "pointer",
					}}
					onClick={() => {
						window.open("https://dribbble.com/poorna");
					}}
				>
					{" "}
					<DribbleIcon />
				</Icon>
				<Icon
					sx={{
						width: "50px",
						height: "50px",
						marginRight: "20px",
						cursor: "pointer",
					}}
					onClick={() => {
						window.open("https://www.behance.net/poouxdesigner");
					}}
				>
					{" "}
					<BehanceIcon />
				</Icon>
			</Box>
		</Box>
		</>);
}

export default index;
