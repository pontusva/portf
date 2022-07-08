import React from "react";
import AstroCalling from "./AstroCalling";
import Carousel from "framer-motion-carousel";
import BreakoutGame from "./BreakoutGame";

const Projects = () => {
	return (
		<>
			<Carousel autoPlay={false}>
				<div>
					<AstroCalling />
				</div>
				<div>
					<BreakoutGame />
				</div>
			</Carousel>
		</>
	);
};

export default Projects;
