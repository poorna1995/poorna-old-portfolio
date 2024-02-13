/* eslint-disable react/jsx-key */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 5 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
// 	return {
// 		id: `vertical-tab-${index}`,
// 		"aria-controls": `vertical-tabpanel-${index}`,
// 	};
// }
const StyledTabs = styled((props) => (
	<Tabs
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
	/>
))({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
	},
	"& .MuiTabs-indicatorSpan": {
		maxWidth: 100,
		width: "100%",
		backgroundColor: "transparent",
	},
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		textTransform: "none",
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: "21px",
		// marginLeft:"36px",
		marginRight: "24px",
		alignItems: "flex-start",
		color: "black",
		
		"&.Mui-selected": {
			color: "#6E2594",
		},
		"&.Mui-focusVisible": {
			backgroundColor: "#6E2594",
		},
	}),
);
export default function Index() {
	const tabsData = [
		{
			
			key: 0,
			label: "Hivepath",
			title: "Lead Designer @ Hivepath",
			description: "Sep2021 - Present",
			about: (
				<>
					<ul style={{fontSize:"18px", fontWeight:"500", fontFamily: "mullish, sans-serif !important", width:"auto", letterSpacing:"0.5px"}}>
						<li>
							Write modern, performant, maintainable code for a
							diverse array of client
							<br /> and internal projects
						</li>
						<li style={{ marginTop: "16px" }}>
							Communicate with multi-disciplinary teams of
							engineers, designers, producers,
							<br /> and clients on a daily basis
						</li>
						<li style={{ marginTop: "16px" }}>
							Work with a variety of different languages,
							platforms, frameworks, and content <br />
							management systems such as JavaScript, TypeScript,
							Gatsby, React, Craft,
							<br /> WordPress, Prismic, and Netlify
						</li>
					</ul>
				</>
			),
		},
		{
			key: 1,
			label: "nVipani",
			title: "UX/UI Designer",
			description: "Sep 2020 - Sep 2021",
			about: (
				<>
					<ul style={{fontSize:"18px", fontFamily: "Satoshi, sans-serif, !important",letterSpacing:"0.5px"}}>
						<li>
							Conducted user research to understand needs,
							behaviors, and pain points of 100+ <br />
							online store retails
						</li>
						<li style={{ marginTop: "16px" }}>
							Built user interface designs to provide the live
							shopping experience in the virtual <br />
							stores for both desktop and mobile customers
						</li>
						<li style={{ marginTop: "16px" }}>
							Conducted usability testing and gathered feedback
							from retailers and customers to <br />
							iterate and improve design solutions
						</li>
						<li style={{ marginTop: "16px" }}>
							Initiated virtual try-on and virtual store
							experience Increased the customer engagement
							<br /> NPS exponentially Staying up-to-date with
							emerging trends and technologies in AR/VR <br />
							virtual stores and translating in design
							collaborated with product manages, retailers,
							<br /> developers to meet business requirements
						</li>
						<li style={{ marginTop: "16px" }}>
							Mentored and trained a team of 3+ interns
							collaborated to increase the velocity and <br />
							execution speed
						</li>
					</ul>
				</>
			),
		},
		{
			key: 2,
			label: "Bluecom",
			title: "UI Designer",
			description: "June 2017 - April 2019",
			about: (
				<>
					<ul style={{fontSize:"18px", fontFamily: "Satoshi, sans-serif, !important", width:"auto", letterSpacing:"0.5px"}}>
						<li>
							Sole designer on the product, responsible for
							leading the design strategy and make design
							decisions independently
						</li>
						<li style={{ marginTop: "16px" }}>
							Proactively seeking feedback and input from the
							executive team and reflecting in the designs
						</li>
						<li style={{ marginTop: "16px" }}>
							Understanding the design needs and goals for the
							product and proactively meet the deadlines
						</li>
						<li style={{ marginTop: "16px" }}>
							Managing time effectively to meet project deadlines
							and deliver high-quality design work
						</li>
						<li style={{ marginTop: "16px" }}>
							Created wireframes, prototypes, and high-fidelity
							mockups to communicate design solutions
						</li>
					</ul>
				</>
			),
		},
		{
			key: 3,
			label: "Crafter",
			title: "UI Designer",
			description: "May 2019 - Jun 2019",
			about: (
				<>
					<ul style={{fontSize:"18px", fontFamily: "Satoshi, sans-serif, !important", width:"auto", letterSpacing:"0.5px"}}>
						<li>
							Sole designer on the product, responsible for
							leading the design strategy and make design
							decisions independently
						</li>
						<li style={{ marginTop: "16px" }}>
							Proactively seeking feedback and input from the
							executive team and reflecting in the designs
						</li>
						<li style={{ marginTop: "16px" }}>
							Understanding the design needs and goals for the
							product and proactively meet the deadlines
						</li>
						<li style={{ marginTop: "16px" }}>
							Managing time effectively to meet project deadlines
							and deliver high-quality design work
						</li>
						<li style={{ marginTop: "16px" }}>
							Created wireframes, prototypes, and high-fidelity
							mockups to communicate design solutions
						</li>
					</ul>
				</>
			),
		},
	];
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
				sx={{
					flexGrow: 1,
					bgcolor: "background.paper",
					display: "flex",
					height: 500,
					fontFamily: "Satoshi, sans-serif, !important",
				}}
			>
				<StyledTabs
					orientation="vertical"
					value={value}
					onChange={handleChange}
					sx={{
						borderLeft: 1,
						borderColor: "divider",
						fontFamily: "Satoshi, sans-serif, !important",
						marginRight: "100px",
						marginTop: "18px",
					}}
				>
					{Array.isArray(cardItems) &&
						cardItems.map((cardItem) => {
							return (
								<StyledTab
									label={cardItem.label}
									sx={{
										marginY: "16px",
										
										"&.Mui-selected": {
											borderLeft: `4px solid #6E2594`,
											// marginRight:"16px",
											borderRight: "none",
											fontWeight: "700",
										},
									}}
								/>
							);
						})}
				</StyledTabs>

				{Array.isArray(cardItems) &&
					cardItems.map((cardItem) => {
						return (
							<TabPanel value={value} index={cardItem.key}>
								<Typography
									sx={{ fontSize: "28px", fontWeight: "700" }}
								>
									{cardItem.title}
								</Typography>
								<Typography
									sx={{ fontSize: "18px", fontFamily: "Satoshi, sans-serif, !important", marginTop: "8px" }}
								>
									{cardItem.description}
								</Typography>
								<Typography>{cardItem.about}</Typography>
							</TabPanel>
						);
					})}
			</Box>
		);
}
