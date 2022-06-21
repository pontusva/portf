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
         <NavbarModal show={show}></NavbarModal>
            <AnimatePresence>
               {show && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                  >
                     <MenuIcon
                        onClick={showing}
                        className='w-16 text-dark z-10 absolute top-6 right-10'
                     />
                  </motion.div>
               )}
            </AnimatePresence>

            <AnimatePresence>
               {!show && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                  >
                     <XIcon
                        onClick={showing}
                        className='w-16 z-10 text-smoothred absolute top-6 right-10' 
                     />
                  </motion.div>
               )}
            </AnimatePresence>
         
      </>
   );
};

export default Icons;
