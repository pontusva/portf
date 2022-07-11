import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MenuItems = ({ show, showing }) => {
	return (
		<>
			<>
				<div>
					<ul
						onClick={showing}
						className="text-6xl flex md:flex-row md:space-x-10 md:space-y-0 space-y-5 flex-col font-bebas text-dark border-cream"
					>
						<Link to="/">
							<motion.li
								whileHover={{ scale: 1.1, y: -4 }}
								whileTap={{ scale: 0.75 }}
								transition={{
									type: "tween",
									stiffness: 100,
								}}
							>
								Home
							</motion.li>
						</Link>
						<Link to="/projects">
							<motion.li
								whileHover={{ scale: 1.1, y: -4 }}
								whileTap={{ scale: 0.75 }}
								transition={{
									type: "tween",
									stiffness: 100,
								}}
							>
								Projects
							</motion.li>
						</Link>
						<Link to="/about">
							<motion.li
								whileHover={{ scale: 1.1, y: -4 }}
								whileTap={{ scale: 0.75 }}
								transition={{
									type: "tween",
									stiffness: 100,
								}}
							>
								About
							</motion.li>
						</Link>
						<Link to="/contact">
							<motion.li
								whileHover={{ scale: 1.1, y: -4 }}
								whileTap={{ scale: 0.75 }}
								transition={{
									type: "tween",
									stiffness: 100,
								}}
							>
								Contact
							</motion.li>
						</Link>
					</ul>
				</div>
			</>
		</>
	);
};

export default MenuItems;
