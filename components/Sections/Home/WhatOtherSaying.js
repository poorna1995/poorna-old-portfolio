/* eslint-disable react/jsx-key */
import React from 'react'
import Quotations from "components/Icons/Quotations";
import { Box, Button, Container, Grid, Icon, Typography } from "@mui/material";
import BasicCard from "components/Common/BasicCard";


function WhatOtherSaying() {
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
<Typography
						sx={{
							fontSize: "48px",
							fontWeight: "800",
							marginBottom: "30px",
							marginTop: "90px",
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
					</Grid>

</>
  )
}

export default WhatOtherSaying