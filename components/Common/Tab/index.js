/* eslint-disable react/jsx-key */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, styled } from "@mui/material";
import { useRouter } from "next/router";


function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
const StyledTabs = styled((props) => (
	<Tabs
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
		// centered
	/>
))({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
	},
	"& .MuiTabs-indicatorSpan": {
		// maxWidth: 40,
		width: "100%",
		// backgroundColor: "#635ee7",
	},
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		textTransform: "none",
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: theme.typography.pxToRem(15),
		marginRight: theme.spacing(1),
		
		// margin: "12px",
		// borderBottom: "2px solid rgba(0,0,0,0.1)",
		// marginBottom: "0px",
		// color: "rgba(255, 255, 255, 0.7)",
		"&.Mui-selected": {
			color: "#5860D7",
			// color: blue,
			backgroundColor: "#EEEFFB",
			borderRadius: "5px",
			transition: "all 0.3s ease-in-out",
		},
		"&.Mui-focusVisible": {
			backgroundColor: "rgba(100, 95, 228, 0.32)",
			transition: "all 0.3s ease-in-out",
		},
		"&:hover": {
			background: "#EFEFFF",
			transition: "all 0.5s ease-in-out",
			borderRadius: "10px",
			color:"#635bff",
			// transform: "scale(1)",
			// transform: "translateX(0%)",
			
			// padding:"10px 8px",
		  },
	}),
);
export default function Index() {
	const router = useRouter();
	const tabsData = [
		{
			key: 0,

			label: "Home",
			URL: "/",
		},
		{
			key: 1,

			label: "Work",
			URL: "/work",
		},
		{
			key: 2,

			label: "About",
			URL: "/about",
		},
		{
			key: 3,

			label: "Avocation",
			URL: "/avocation",
		},
		{
			key: 4,

			label: "Resume",
			URL: "/assets/resume1.pdf",
			openInNewTab: true,
		},
	];
	const currentPath = router.asPath;

	const handleItemClick = (route, openInNewTab) => {
		if(openInNewTab){
			window.open(route, "_blank");
			return;
		}
		router.push(route);
	};
	const isActive = (route) => currentPath === route;

	const [value, setValue] = React.useState(0);
	const [cardItems, setCardItems] = React.useState([]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	React.useEffect(() => {
		setCardItems(tabsData);
	}, []);
	if (cardItems)
		return (
			<Box
				// maxWidth="600px"
				sx={{
					//  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.15)",
					// backgroundColor:"white",
					// borderBottom: "2px solid rgba(0,0,0,0.1)",
					// W: 632px
					// H: 68px
marginTop:"36px",
					height: "68px",
					// this line is for tab fixing at bottom
					// position: 'fixed', bottom: 0, left: 0, right: 0 ,
					// border: "2px solid black",
					borderRadius: "10px",
					// border: "2px solid rgba(0, 0, 0, 0.1)",
					width:"1124px",
				
					backgroundColor: "rgba(255, 255, 255, 12)",
					boxShadow: "0px 25px 80px rgba(0, 0, 0, 0.15)",
					// backgroundColor: "grey",
					display: "flex",
					alignItems: "center",
					// justifyContent: "center",
					fontFamily: "Satoshi, sans-serif, !important",
                   
				}}
			>
				<Typography sx={{fontSize: "32px",fontWeight: "700",paddingLeft:"26px",marginRight:"220px", fontFamily: "Satoshi, sans-serif !important"}}>P.</Typography>
				
				<StyledTabs
					// value={value}
					// onChange={handleChange}
					aria-label="basic tabs example"
				>
					{Array.isArray(cardItems) &&
						cardItems.map((cardItem) => {
							return (
								<StyledTab
									label={cardItem.label}
									onClick={() =>
										handleItemClick(cardItem.URL, cardItem.openInNewTab)
									}
									sx={
										isActive(cardItem.URL)
											? {
												fontFamily: "Satoshi, sans-serif, !important",
													color: "#ffffff",
													textTransform: "initial",
													fontWeight: 600,
													fontSize: "16px",
													// transform: "translateX(200%)",
													// borderBottom:
												
													
													//     "2px solid #5860D7",
											// letterSpacing: "0.5px",
													margin: "28px",
													fontFamily: "Satoshi, sans-serif, !important",
													// fontFamily: "Satoshi". 
													
													// border: "2px solid rgba(0, 0, 0, 0.1)",
													backgroundColor: "#635bff",
													// backgroundColor:"rgba(255, 255, 255, 0.1)",
													borderRadius: "5px",
													transition: "all 0.3s ease-in-out",
													
											  }
											  
											: {
													textTransform: "initial",
													fontWeight: 600,
													fontSize: "17px",
													LetterSpacing: "24px",
                                                    margin: "28px",
													color:"#2a2a2a",
													fontFamily: "Satoshi, sans-serif !important",
													// padding: "12px",
													transition: "all 0.5s ease-in-out",
													// transform: "Tran(0.8)",
													// transform: "translateX(100%)",
											  }

									}
									{...a11yProps(cardItem.key)}
								/>
							);
						})}
				</StyledTabs>
			</Box>
		);
}
