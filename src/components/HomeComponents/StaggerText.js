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

   const text = "Pontus Abrahamsson.";

   return (
      <>
         <div>
            <motion.h1
               variants={sentence}
               initial='hidden'
               animate='visible'
               className='md:text-8xl text-3xl text-center font-bold font-montserrat text-cream border-b-8 border-vom'
            >
               {text.split("").map((char, index) => {
                  return (
                     <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                     </motion.span>
                  );
               })}
               <br />
            </motion.h1>
         </div>
      </>
   );
};

export default StaggerText;
