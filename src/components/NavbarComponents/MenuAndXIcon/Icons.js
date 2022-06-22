import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavbarModal from "../NavbarModalComponents/NavbarModal";

const Icons = () => {
   const [show, setShow] = useState(true);

   const showing = () => {
      setShow(!show);
   };


   return (
		<>
			<NavbarModal show={show} showing={showing}></NavbarModal>
			<AnimatePresence>
				{show && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 3,
								type: "tween",
								stiffness: 50,
							},
						}}
						exit={{ opacity: 0, transition: { duration: 0 } }}
					>
						<MenuIcon
							onClick={showing}
							className="w-14 text-cream z-10 absolute top-6 md:right-10 right-14 cursor-pointer"
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{!show && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1}}
						transition={{
							type: "tween",
							stiffness: 5,
							duration: 0.7,
						}}
						exit={{ opacity: 0 }}
					>
						<XIcon
							onClick={showing}
							className="w-14 z-50 text-cream absolute top-6 right-10 cursor-pointer"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</>
   );
};

export default Icons;
