/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import image2 from "public/assets/image2.jpg";
import image1 from "public/assets/image1.jpg";
// const imageFirst = image2.src;
// const imageSecond = image1.src;
import Tab from "components/Common/Tab";
import PrimaryButton from "components/Common/Button/PrimaryButton";
function Banner() {
	return (
		<>
			<Typography
				sx={{
					fontSize: "28px",
					fontWeight: "700",
					lineHeight: "1.2",
					marginBottom:"26px"
				}}
			>
				Hi, My name is <br />
				<span
					style={{
						fontSize: "78px",
						fontWeight: "800",
						// color: "#6E2594",\
						color:"#635bff"
,					}}
				>
					Poorna Praneesha.
				</span>
				<br />
				<span
					style={{
						fontSize: "78px",
						fontWeight: "800",
					
					}}
				>
				designing for the Future.
				</span>
			
			</Typography>

			<Typography
				sx={{ fontSize: "21px", marginTop: "28px", color: "#424046" }}
			>
				A creative and strategic{" "}
				<span style={{ color: "#635bff", fontWeight: "800" }}>
					Full-Stack Lead Designer
				</span>{" "}
				with over{" "}
				<span style={{ color: "#635bff", fontWeight: "800" }}>
					6+ years
				</span>{" "}
				of experience in leading product design teams to create
				user-centered and innovative product designs.
			</Typography>
			<Typography
			sx={{
				fontSize: "18px",
				fontWeight: "600",
				// lineHeight: "1.2",
				// marginBottom:"6px",
				marginTop:"16px",
			}}
			>
			About Me:

			</Typography>
			<Typography 
			sx={{
						fontSize:"18px",
						// fontWeight: 500,
						textDecoration: "underline",
	
						"&:hover": {
							textDecoration: "underline",
							color: " blue",
							fontWeight: 600,
							
							// borderColor: "#000000",
							// boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
						},
					}}>
            <ul >
				<li>
					<a href="https://drive.google.com/drive/u/4/folders/15HPQ0slI4GQXlZtG7sTpiewtT4RRe2Gh" target="_blank"
					
					
					> Design Portfolio</a>
				</li>
				</ul>
			</Typography>
			<Typography
			
			sx={{
				fontSize:"18px",
				textDecoration: "underline",
				// fontWeight: 500,

				"&:hover": {
					textDecoration: "underline",
					color: " blue",
					fontWeight: 600,
					
					// borderColor: "#000000",
					// boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
				},
			}}>
				<ul>
				<li>
					<a href="https://drive.google.com/file/d/1O-wjP7t0BVtKWACNDcGVmOXzo5c2h_GC/view" target="_blank"
					
					
					> Personal History Statement</a>
				</li>
			</ul>
			</Typography>
			<Typography
			sx={{
				fontSize: "18px",
				fontWeight: "600",
				// textDecoration: "underline",
				// lineHeight: "1.2",
				// marginBottom:"6px",
				marginTop:"16px",
			}}
			>
			Recognition:

			</Typography>
			<Typography
			
			sx={{
				fontSize:"18px",
				// fontWeight: 600,
				textDecoration: "underline",

				"&:hover": {
					textDecoration: "underline",
					color: " blue",
					fontWeight: 600,
					
					// borderColor: "#000000",
					// boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
				},
			}}>
				<ul>
				<li>
					<a href="https://drive.google.com/file/u/4/d/1mQZPsRfYwxZuBhLlQOPZiBOxIsanj1Oy" target="_blank"
					
					
					> Best Employee Award</a>
				</li>
			</ul>
			</Typography>
			
			<Typography
			
			sx={{
				fontSize:"18px",
				// fontWeight: 600,
				textDecoration: "underline",

				"&:hover": {
					textDecoration: "underline",
					color: " blue",
					fontWeight: 600,
					
					// borderColor: "#000000",
					// boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
				},
			}}>
				<ul>
				<li>
					<a href="https://drive.google.com/file/d/1ej4DxegRW4_0r0dnIo-d3vOSt1STx0fi/view" target="_blank"
					
					
					> WorldQuant</a>
				</li>
			</ul>
			</Typography>
	
			{/* 
			<Grid container spacing={2} direction="row" marginTop={8}>
				<Grid item>
					<img
						style={{ width: "436px", height: "440px" }}
						src={imageSecond}
						alt="Image 2"
					/>
				</Grid>
				<Grid item>
					<img
						style={{ width: "600px", height: "440px" }}
						src={imageFirst}
						alt="Image 2"
					/>
				</Grid>
			</Grid> */}
		</>
	);
}

export default Banner;
