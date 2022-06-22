import { AnimatePresence, motion } from "framer-motion";
import MenuItems from "../MenuItems";

const NavbarModal = ({ show, showing }) => {
   const variants = {
      initial: {
         opacity: 0,
         scale: 0.75,
      },
      animate: {
         opacity: 1,
         scale: 0.98,
      },
      exit: {
         opacity: 0,
         scale: 0.75,
      },
   };

   return (
      <>
         <AnimatePresence>
            {!show && (
               <motion.div
                  variants={variants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className='w-screen h-screen bg-vom/10 backdrop-blur-xl fixed flex justify-center items-center z-10'
               >
                  <MenuItems show={show} showing={showing}/>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default NavbarModal;
