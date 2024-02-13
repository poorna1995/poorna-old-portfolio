/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Box, Button, Container, Grid, Icon, Typography } from "@mui/material";
import BasicCard from "components/Common/BasicCard";
import PrimaryButton from "components/Common/Button/PrimaryButton";
import Quotations from "components/Icons/Quotations";

import React from "react";
import AboutmePhoto from "public/assets/about_me.gif";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import DribbleIcon from "components/Icons/DribbleIcon";
import BehanceIcon from "components/Icons/BehanceIcon";
import WhatOtherSaying from "../Home/WhatOtherSaying";

const image = AboutmePhoto.src;
function AboutMe() {
	const data = [
		{
			description: `“ I was impressed by her eagerness to learn new things, logical thinking and passion towards her work. She got quickly moulded to the organization culture and started understanding the minute issues needed to be solved in no time.”`,
			icon: <Quotations />,
			description2: "Chandana",
			icon2: <Quotations />,
			description3: "Product Manager",
		},
		{
			description:
				"“ I was impressed by her eagerness to learn new things, logical thinking and passion towards her work. She got quickly moulded to the organization culture and started understanding the minute issues needed to be solved in no time.”",
			icon: <Quotations />,
			description2: "Chandana",
			icon2: <Quotations />,
			description3: "Product Manager",
		},
		{
			description:
				"“ I was impressed by her eagerness to learn new things, logical thinking and passion towards her work. She got quickly moulded to the organization culture and started understanding the minute issues needed to be solved in no time.”",
			icon: <Quotations />,
			description2: "Chandana",
			icon2: <Quotations />,
			description3: "Product Manager",
		},
	];
	const [cardItems, setCardItems] = React.useState();
	React.useEffect(() => {
		setCardItems(data);
	}, []);
	if (cardItems)
		return (
			<>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						// alignItems: "center",
						// justifyContent: "center",
					}}
				>
					<Typography
						sx={{
							fontSize: "48px",
							fontWeight: "800",
							marginBottom: "20px",
							
						}}
					>
						I create unique solutions <br/>
that improve people's lives.
					</Typography>
					
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: "500",
							marginBottom: "30px",
							marginTop: "40px",
						}}
					>
						My name is{" "}
						<span style={{ color: "#6E2594", fontWeight: "700" }}>
							Poorna Praneesha
						</span>
						, I also go by “the most Inquisitive learner and
						Passionate in the room”
						<br />
						<br />A{" "}
						<span style={{ color: "#6E2594", fontWeight: "700" }}>
							full-stack lead designer
						</span>{" "}
						and a creative thinker with{" "}
						<span style={{ color: "#6E2594", fontWeight: "700" }}>
							6+ years
						</span>
						of 
						industry experience in UI/UX design, team building &
						leadership. Strongly  driven towards creating
						value for business & technology stakeholders.
						<br />
						<br />
						<Box sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
						<img
						style={{ width: "600px", height: "560px",objectFit:"contain" }}
						src={image}
						alt="Image"
					/>
						</Box>
						
					<br/>
					<br/>
						<span style={{ fontWeight: "700" }}>
							Worked in diverse domains ranging from
						</span>
						<ul>
							<li>E-Commerce</li>
							<li>Consumer Technology</li>
							<li>Finance</li>
							<li>Networking</li>
							<li>Construction & Entertainment.</li>
						</ul>
						<br />
						Built end-to-end UI/UX design and grown team size of 6
						and had an 
						opportunity to mentored 15+ college graduates.
						<br />
						<br />I strongly believe, building use-centric design is
						key solution to solve  world’s complex problems.
						Big follower of design approaches innovated
						by Fortune 500 technology companies(Apple, Nike, MSFT),
						Silicon valley
					
						startups (Notion.io). I take aspirations from nature,
						Big-media 
						companies (Warner Bro’s, Disney), and everyday large
						scale software 
						cosumer products. With the experience gleaned up over a
						period, I am 
						looking for next career endeavor in growing and applying
						my design,
					
						creative and leadership skills to solve business
						problems.
					</Typography>
					<Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
					<PrimaryButton sx={{ backgroundColor: "black", paddingLeft:"24px", fontSize:"18px",
					 "&:hover": {
									backgroundColor: "white !important",
									border: "1px solid #635bff",
									color:"#635bff",
									transition: "all 0.3s ease-in-out",
									boxShadow: "none",

								}, }} onClick={() => window.open("/assets/resume1.pdf",'_blank')}>
						Resume
						
					</PrimaryButton>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: "500",
							marginBottom: "30px",
							marginTop: "40px",
						}}
					>
						Instead, if you just want to ease into it — start off
						with observing  my life — you can find me on{" "}<br/>
						<span
							style={{
								fontWeight: "800",
								textDecoration: "underline",
								cursor: "pointer",
								marginLeft:"300px"
							}}
						>
							poorna7d@gmail.com
						</span>
					</Typography>
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
								window.open(
									"https://www.behance.net/poouxdesigner",
								);
							}}
						>
							{" "}
							<BehanceIcon />
						</Icon>
					</Box>

					</Box>
					
					{/* <Typography
						sx={{
							fontSize: "48px",
							fontWeight: "800",
							marginBottom: "30px",
							marginTop: "40px",
						}}
					>
						What others saying
					</Typography>
					<Grid container spacing={4} direction="row">
						{Array.isArray(cardItems) &&
							cardItems.map((cardItem) => {
								return (
									<Grid item>
										<BasicCard
											sx={{
												width: "360px",
												height: "380px",
												backgroundColor: "#F4F4F4",
												boxShadow: "none",
												borderRadius: "10px",
											}}
											description={cardItem.description}
											icon={cardItem.icon}
											icon2={cardItem.icon2}
											description2={cardItem.description2}
											description3={cardItem.description3}
										/>
									</Grid>
								);
							})}
					</Grid> */}
				</Box>
			</>
		);
}

export default AboutMe;
