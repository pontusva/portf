import React from "react";
import Breakout from "../../Assets/breakoutGame.jpg";
import { motion } from "framer-motion";

const BreakoutGame = () => {
	return (
		<>
			<div className="flex flex-col space-y-5 justify-center items-center h-screen w-screen bg-vomblue ">
				<div>
					<h1 className="md:text-4xl text-3xl text-center font-bold font-montserrat pb-5 text-greenish">
						Breakout Game
					</h1>
					<a
						href="https://breakout.d3kmq4uket99zp.amplifyapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						<motion.img
							whileHover={{
								y: 5,
								x: -3,
								transition: {
									type: "tween",
									stiffness: 200,
								},
							}}
							className="md:w-96 md:h-auto md:p-0 rounded-xl p-5 object-contain "
							src={Breakout}
							alt="Breakout Game"
						/>
					</a>
				</div>
				<div>
					<p className="md:w-96 p-5 text-justify font-montserrat text-cream">
						A breakout game where you control a paddle where
						the goal is to destroy all the bricks. Built with
						Vanilla JS, HTML and css.
					</p>
				</div>
			</div>
		</>
	);
};

export default BreakoutGame;
