'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "../../../config/icon";
interface Props {
   data: {
      name: string
   }[]
}

const FilterDropDown = ({ data }: Props) => {
   const [open, setOpen] = useState(false);

   return (
      <motion.div animate={open ? "open" : "closed"} className="relative">
         <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
         >
            <span className="font-medium text-sm">Post actions</span>
            <motion.span variants={iconVariants}>
               <Icon.chevronDown />
            </motion.span>
         </button>

         <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute z-10 top-[120%] left-[50%] w-48 overflow-hidden"
         >
            {data.map((item, i) => (
               <Option setOpen={setOpen} key={i} text={item.name} />
            ))}

         </motion.ul>
      </motion.div>
   );
};

const Option = ({ text, setOpen }: any) => {
   return (
      <motion.li
         variants={itemVariants}
         onClick={() => setOpen(false)}
         className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
         <motion.span variants={actionIconVariants}>

         </motion.span>
         <span>{text}</span>
      </motion.li>
   );
};

export default FilterDropDown;

const wrapperVariants = {
   open: {
      scaleY: 1,
      transition: {
         when: "beforeChildren",
         staggerChildren: 0.1,
      },
   },
   closed: {
      scaleY: 0,
      transition: {
         when: "afterChildren",
         staggerChildren: 0.1,
      },
   },
};

const iconVariants = {
   open: { rotate: 180 },
   closed: { rotate: 0 },
};

const itemVariants = {
   open: {
      opacity: 1,
      y: 0,
      transition: {
         when: "beforeChildren",
      },
   },
   closed: {
      opacity: 0,
      y: -15,
      transition: {
         when: "afterChildren",
      },
   },
};

const actionIconVariants = {
   open: { scale: 1, y: 0 },
   closed: { scale: 0, y: -7 },
};