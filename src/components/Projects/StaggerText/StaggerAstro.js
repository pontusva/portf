import React from "react";
import { motion } from "framer-motion";

const StaggerAstro = () => {
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

    const astro = "Astrological Calling";
	return (
		<>
			<div>
				<motion.h1
					variants={sentence}
					initial="hidden"
					animate="visible"
					className="md:text-4xl text-3xl text-center font-bold font-montserrat pb-5 text-greenish"
				>
					{astro.split("").map((char, index) => {
						return (
							<motion.span
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

export default StaggerAstro;
