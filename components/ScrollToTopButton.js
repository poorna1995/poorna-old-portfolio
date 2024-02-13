import { useEffect, useState } from "react";

// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Button } from "@mui/material";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 20) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		console.log("scrollToTop called");
		const topElement = document.getElementById("top");
		console.log("topElement:", topElement);
		if (topElement) {
			topElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			{isVisible && (
				<>
					{console.log("Button rendered")}
					<Button
						variant="contained"
						color="primary"
						onClick={scrollToTop}
						style={{
							position: "fixed",
							bottom: "2rem",
							left: "2rem",
							zIndex: 9999,
						}}
						// startIcon={<KeyboardArrowUpIcon />}
					></Button>
				</>
			)}
		</>
	);
};

export default ScrollToTopButton;
