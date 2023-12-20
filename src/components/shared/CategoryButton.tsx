'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { config } from "../../../config/siteConfig";
import Button from "./Button";
interface ICategoryProps {
   setSelectedImage: Dispatch<SetStateAction<string>>
}

const CategoryButton = ({ setSelectedImage }: ICategoryProps) => {
   const [selectedCategory, setSelectedCategory] = useState(config.CATEGORIES[0].name);

   const handleCategoryChange = (categoryName: string, img: string) => {
      setSelectedCategory(categoryName);
      setSelectedImage(img)
   };
   return (
      <>
         <div className='flex-between gap-4'>
            {config.CATEGORIES.map((cat, i) => (
               <Button type='button' onClick={() => handleCategoryChange(cat.name, cat.image)} key={i}>{cat.name}</Button>
            ))}
         </div>
         <div className="mt-6">
            <ul className="flex items-center gap-6">
               {config.CATEGORIES.find(cat => cat.name === selectedCategory)?.items.map((item, index) => (
                  <li key={index}>
                     <b>{item}</b>
                  </li>
               ))}
            </ul>
         </div>
      </>
   )
}

export default CategoryButton
