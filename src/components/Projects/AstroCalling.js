import React from "react";
import Calling from "../../Assets/calling.jpg";
import { motion } from "framer-motion";
import StaggerAstro from "./StaggerText/StaggerAstro";

const AstroCalling = () => {
	return (
		<>
			<div className="flex flex-col space-y-5 justify-center items-center h-screen w-screen bg-vomblue ">
				<div>
					<StaggerAstro />
					<a
						href="https://celestialseer.d3khcr59rm4won.amplifyapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { delay: 1, duration: 2 },
							}}
							whileHover={{
								y: 5,
								x: -3,
								transition: {
									type: "tween",
									stiffness: 200,
								},
							}}
							className="w-96 h-auto rounded-xl "
							src={Calling}
							alt="astrocalling"
						/>
					</a>
				</div>
				<div>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.3, duration: 2 }}
						className="w-96 text-justify font-montserrat text-cream"
					>
						Website where you can read your horoscope and draw
						tarot-cards. Built with React, framer-motion
						Tailwind, Inkscape. Using an api for the horoscope
						and a node package for the tarot cards.
					</motion.p>
				</div>
			</div>
		</>
	);
};

export default AstroCalling;
