import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";
import StaggerText from "./StaggerText";
import SocialIcons from "./SocialIcons";

const Home = () => {
	const particlesInit = useCallback((main) => {
		loadFull(main);
	}, []);
	return (
		<>
			<div className="flex flex-col space-y-5 justify-center items-center h-screen bg-vomblue ">
				<Particles
					className="md:w-96 w-36 h-36 absolute md:top-56 top-24"
					options={particlesOptions}
					init={particlesInit}
				/>
				<div className="z-10">
					<SocialIcons />
				</div>
				<div className="z-10">
					<StaggerText />
				</div>
			</div>
		</>
	);
};

export default Home;
