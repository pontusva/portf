import React from "react";
import { motion } from "framer-motion";

const StaggerText = () => {
	const sentence = {
		hidden: {
			opacity: 1,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.8,
				staggerChildren: 0.08,
			},
		},
	};

	const letter = {
		hidden: {
			opacity: 0,
			y: 50,
		},

		visible: {
			opacity: 1,
			y: 0,
		},
	};

	const text = "Pontus Abrahamsson,";
	const text2 = "Web Developer.";

	return (
		<>
			<div>
				<motion.h1
					variants={sentence}
					initial="hidden"
					animate="visible"
					className="md:text-5xl text-3xl text-center font-bold font-montserrat text-cream"
				>
					{text.split("").map((char, index) => {
						return (
							<motion.span
								key={char + "-" + index}
								variants={letter}
							>
								{char}
							</motion.span>
						);
					})}
					<br />
					{text2.split("").map((char, index) => {
						return (
							<motion.span
								className="text-vom"
								key={char + "-" + index}
								variants={letter}
							>
								{char}
							</motion.span>
						);
					})}
				</motion.h1>
			</div>
		</>
	);
};

export default StaggerText;
