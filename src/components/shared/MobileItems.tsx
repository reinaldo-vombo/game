'use client'
import { useState } from "react";
import Image from "next/image"
import { Button } from "../ui/button"
import { AnimatePresence, motion } from "framer-motion";
import { useProvider } from "@/context/Provider";
import Favorites from "./Favorites";


const MobileItems = () => {
   const { handleShowCart, cart } = useProvider()
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   return (
      <div className="flex items-center justify-center relative">
         <Button className="" onClick={toggleMenu}>
            <Image src='/icons/settings.gif' className=" w-full h-full" width={400} height={400} alt="icon" />
         </Button>
         <AnimatePresence>
            {isMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: -100 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center mb-4 space-y-2 absolute"
               >
                  <div className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                     <Button onClick={handleShowCart}>
                        <Image src='/icons/shopping-bag.gif' className="w-full" width={400} height={400} alt="icon" />
                        {cart.length >= 1 && (
                           <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        )}
                     </Button>
                  </div>
                  <div className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                     <Favorites imgPath="black-heart.gif" />
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

      </div>

   )
}

export default MobileItems
