import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactIcons = () => {
	const one = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
            transition: {
                duration: 1
            }
		},
		whileHover: {
			scale: 1.1,
		},
	};

	const two = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
            transition: {
                duration: 2
            }
		},
		whileHover: {
			scale: 1.1,
		},
	};

	const three = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
            transition: {
                duration: 3
            }
		},
		whileHover: {
			scale: 1.1,
		},
	};

	return (
		<>
			<div className="flex space-x-10">
				<motion.a
					variants={one}
					initial="initial"
					animate="animate"
					whileHover="whileHover"
					href="https://github.com/pontusva"
					target="_blank"
				>
					<FaGithub className="w-10 h-10 text-greenish" />
				</motion.a>
				<motion.a
					variants={two}
					initial="initial"
					animate="animate"
					whileHover="whileHover"
					href="#"
				>
					<FaTwitter className="w-10 h-10 text-greenish" />
				</motion.a>
				<motion.a
					variants={three}
					initial="initial"
					animate="animate"
					whileHover="whileHover"
					href="#"
				>
					<FaInstagram className="w-10 h-10 text-greenish" />
				</motion.a>
			</div>
		</>
	);
};

export default ContactIcons;
