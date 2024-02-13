import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import AppHeader from "components/AppHeader";
import BehanceIcon from "components/Icons/BehanceIcon";
import DribbleIcon from "components/Icons/DribbleIcon";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import ScrollToTopButton from "components/ScrollToTopButton";
import React from "react";

function index() {
	return (
		<>
			<Box sx={{ display: "flex",}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",

						maxHeight: "100vh",

						padding: "32px",
					
					}}
				>
					{" "}
					<List sx={{ marginY: "10vh" }}>
						<ListItem sx={{ marginY: "10px" }}>
							<LinkedinIcon />
						</ListItem>
						<ListItem sx={{ marginY: "10px" }}>
							<DribbleIcon />
						</ListItem>
						<ListItem sx={{ marginY: "10px" }}>
							<BehanceIcon />
						</ListItem>

						<ListItem>
							<ScrollToTopButton />
						</ListItem>
					</List>
				</Box>
			</Box>
		</>
	);
}

export default index;
