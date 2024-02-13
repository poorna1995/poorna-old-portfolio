import { Box, IconButton } from "@mui/material";
import CloseIcon from "components/Icons/CloseIcon";

import React from "react";

function AvocationDetailHeader({ handleCloseDrawer }) {
	return (
		<Box sx={{ display: "flex", justifyContent: "end", margin: "22px" }}>
			<IconButton onClick={handleCloseDrawer}>
				<CloseIcon />
			</IconButton>
		</Box>
	);
}

export default AvocationDetailHeader;
