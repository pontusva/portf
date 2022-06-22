import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialIcons = () => {
	const gitHubVariants1 = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 2,
			},
		},
		whileHover: {
			scale: 1.1,
		},
	};

	const gitHubVariants2 = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 2,
				delay: 2,
			},
		},
		whileHover: {
			scale: 1.1,
		},
	};

	const gitHubVariants3 = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 3,
				delay: 2,
			},
		},
		whileHover: {
			scale: 1.1,
		},
	};

	return (
		<>
			<div className="flex space-x-10">
				<motion.a
					variants={gitHubVariants1}
					initial="initial"
					animate="animate"
					whileHover="whileHover"
					href="https://github.com/pontusva"
					target="_blank"
				>
					<FaGithub className="w-10 h-10 text-greenish" />
				</motion.a>
				<motion.a
					variants={gitHubVariants2}
					initial="initial"
					animate="animate"
					whileHover="whileHover"
					href="#"
				>
					<FaTwitter className="w-10 h-10 text-greenish" />
				</motion.a>
				<motion.a
					variants={gitHubVariants3}
					initial="initial"
					animate="animate"
					whileHover="whileHover"
					href="https://www.instagram.com/pontwah/"
					target="_blank"
				>
					<FaInstagram className="w-10 h-10 text-greenish" />
				</motion.a>
			</div>
		</>
	);
};

export default SocialIcons;
