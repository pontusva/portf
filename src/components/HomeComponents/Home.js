import React from "react";
import StaggerText from "./StaggerText";
import SocialIcons from "./SocialIcons";

const Home = () => {
	return (
		<>
			<div className="flex flex-col space-y-5 justify-center items-center h-screen bg-vomblue ">
				<div>
					<SocialIcons />
				</div>
				<StaggerText />
			</div>
		</>
	);
};

export default Home;
