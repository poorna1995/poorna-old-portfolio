import React from "react";
import { Box, Divider, Grid, Icon, Typography } from "@mui/material";
function Experience() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					backgroundColor: "black",
					marginTop: "50px",
					height: "220px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flex: 1,
						borderRight: 1,
						borderColor: "divider",
					}}
				>
					<Typography
						sx={{
							color: "white",
							textAlign: "center",
							fontSize: "32px",
							fontWeight: "700",
							lineHeight: "1",
						}}
					>
						6+ Years <br />
						<span style={{ fontSize: "14px", fontWeight: "500" }}>
							of Experience in Design
						</span>
					</Typography>
				</Box>

				<Divider
					sx={{ backgroundColor: "white", marginY: "32px" }}
					orientation="vertical"
					flexItem
				/>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flex: 1,
						borderRight: 1,
						borderColor: "divider",
					}}
				>
					<Typography
						sx={{
							color: "white",
							textAlign: "center",
							fontSize: "32px",
							fontWeight: "700",
							lineHeight: "1",
						}}
					>
						15+ Projects
						<br />
						<span style={{ fontSize: "14px", fontWeight: "500" }}>
							worked
						</span>
					</Typography>
				</Box>
				<Divider
					sx={{ backgroundColor: "white", marginY: "32px" }}
					orientation="vertical"
					flexItem
				/>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flex: 1,
						borderRight: 1,
						borderColor: "divider",
					}}
				>
					<Typography
						sx={{
							color: "white",
							textAlign: "center",
							fontSize: "32px",
							fontWeight: "700",
							lineHeight: "1",
						}}
					>
						2 Certificate
						<br />
						<span style={{ fontSize: "14px", fontWeight: "500" }}>
							Best Excellence working
						</span>
					</Typography>
				</Box>
			</Box>
		</>
	);
}

export default Experience;
