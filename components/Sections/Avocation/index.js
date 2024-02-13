/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useRouter } from "next/router";
import { Box, Container, Grid, Typography } from "@mui/material";
import BottomDrawer from "components/Common/BottomDrawer/BottomDrawer";

import AvocationDetailHeader from "./AvocationDetailHeader";

const images = [
	{
		src: "/assets/AvocationImgs/4.jpg",
        label:"Wildness and freedom",
        description:"The image of a wolf in the mountains can represent the idea of wildness and freedom, as wolves are often seen as symbols of independence and strength"
	},
	{
		src: "/assets/AvocationImgs/9.jpg",
        label:"Hope in life and growth",
        description:"The painting that depicts hope in life and growth can feature various symbols that convey a sense of new beginnings, progress, and renewal. Together, these represent the one of positivity, vitality, and the possibility of transformation."
	},
	{
		src: "/assets/AvocationImgs/11.jpg",
        label:"Qualities of enlightenment and teachings",
        description:"Buddha's painting is a system of visual elements that represent the teachings, wisdom, and qualities. together, these elements create a balanced and harmonious image of the Buddha, inspiring spiritual growth and enlightenment."
	},
	{
		src: "/assets/AvocationImgs/12.jpg",
        label:"Emotional Purification through the Universe",
        description:"Human represents the compassion, and kindness that is being offered to another person or the universe as a whole. The painting has fascinated me that the universe helps wash away negative thoughts and emotions, Overall, the symbolism of a hand in the rain can convey a sense of hope, and renewal."
	},
	{
		src: "/assets/AvocationImgs/5.jpg",
        label:"Transformation and growth",
        description:"Trees undergo a constant process of transformation and growth, shedding leaves and growing new ones. Painting a woman's face tree branches could be seen as a way to represent this process of transformation and growth, emphasizing the idea of change and renewal. "
	},
	{
		src: "/assets/AvocationImgs/1.jpg",
        label:"Power and Strength",
        description:"Wolves are often seen as powerful and strong animals, capable of taking down large prey and surviving in harsh environments. As a result,wolf paintings can symbolize strength and power, representing the idea of resilience and the ability to overcome obstacles."
	},
	{
		src: "/assets/AvocationImgs/3.jpg",
        label:"My Spiritual Significance",
        description:"I am born and raised in one of the most spiritual places in India.   In most of the Indian cultures, mountains are believed to have spiritual significance, representing the power of the gods, the sacredness of nature, or the importance of balance and harmony. Mountain with designs can thus symbolize the importance of connecting with the nature, culture and embracing the spiritual side of life."
	},
	
	{
		src: "/assets/AvocationImgs/7.jpg",
        label:"New beginnings and hope",
        description:"The aurora is often associated with new beginnings, as it marks the start of a new day. When combined with flowers, it can represent hope and optimism for the future."
	},
	{
		src: "/assets/AvocationImgs/8.jpg",
        label:"The Stillness of Winter",
        description:"The presence of snow can symbolize the stillness and purity of winter. The soft white blanket of snow covering the ground can create a sense of calmness and quietness."
	},
	{
		src: "/assets/AvocationImgs/10.jpg",
        label:"The Light Within",
        description:"The painting is seen as a metaphor for the spiritual or emotional journey of self-discovery and self-awareness, in which an individual learns to tap into their own inner light and use it to guide them through life's challenges. It encourages to look within for guidance, inspiration, and strength, and to cultivate my own inner light as a source of positivity and hope."
	},
	{
		src: "/assets/AvocationImgs/2.jpg",
        label:"Power and Strength",
        description:"Wolves are often seen as powerful and strong animals, capable of taking down large prey and surviving in harsh environments. As a result,wolf paintings can symbolize strength and power, representing the idea of resilience and the ability to overcome obstacles."
	},
	{
		src: "/assets/AvocationImgs/6.jpg",
        label:" Connection with nature",
        description:"nature represents growth, strength, and resilience. Using nature to paint on a women’s face could suggest a desire to connect with the natural world and highlight the beauty and vitality of nature and women."
	},
];

function index() {
	const router = useRouter();
	const drawerOpen = router.query.drawerOpen;
    const[imageData, setImageData] = React.useState({});
	const [openDrawer, setOpenDrawer] = React.useState(drawerOpen);
	const handleOpenDrawer = (image) => {
        setImageData(image);
		setOpenDrawer(true);

		// router.push(
		// 	`/avocation`,
		// );
	};
	const handleCloseDrawer = () => {
		setOpenDrawer(false);
		// router.push(`/avocation`);
	};
 


	return (
		<>
			<Typography
				sx={{
					fontSize: "48px",
					fontWeight: "800",
					marginBottom: "50px",
                  
				}}
			>
				"Art is more than just a <br/>image. It's storytelling”
			</Typography>
			<Grid container spacing={2}>
				{images.map((image) => (
					<Grid item xs={12} sm={6} md={4} key={image.src}>
						<div style={{ width: "100%", height: "100%"}}

						
						>
							<img
								src={image.src}
								style={{
									width: "100%",

									height: "100%",
									objectFit: "contain",
									cursor: "pointer",
									
								}}
								onClick={() => {
									handleOpenDrawer(image);
								}}
							/>
						</div>
					</Grid>
				))}
			</Grid>
			<BottomDrawer
				openDrawer={openDrawer}
				handleClose={handleCloseDrawer}
			>
				<Container maxWidth="lg" >
                    <Box sx={{margin:"40px"}} >
						{/* sx={{margin:"40px"} */}
					<AvocationDetailHeader
						handleCloseDrawer={handleCloseDrawer}
					/>
                    		<Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={6}>
									<img
										style={{
											width: "400px",

											height: "500px",
											objectFit: "contain",
											cursor: "pointer",
										}}
                                    src={imageData.src}/>


                            </Grid>
                            <Grid item xs={12} sm={6}>
									<Box>
										<Typography sx={{fontSize:"48px", fontWeight:"800",marginBottom:"12px"}}>
										{imageData.label}
										</Typography>
                                        <Typography sx={{fontSize:"18px",lineHeight:"30px"}}>{imageData.description}</Typography>
									</Box>
								</Grid>
                            </Grid>
					{/* <AvocationDetail /> */}
                    {/* <img src={imageData.src}/>
                    <Typography>{imageData.description}</Typography> */}
                    </Box>
				</Container>
			</BottomDrawer>
		</>
	);
}

export default index;
