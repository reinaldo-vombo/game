'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { config } from "../../../config/siteConfig";
import { Toggle } from "@/components/ui/toggle"
import Button from "./Button";
interface ICategoryProps {
   setSelectedImage: Dispatch<SetStateAction<string>>
   setSlectedcategory: Dispatch<SetStateAction<string>>
}

const CategoryButton = ({ setSelectedImage, setSlectedcategory }: ICategoryProps) => {
   const [selectedCategory, setSelectedCategory] = useState(config.CATEGORIES[0].name);

   const handleCategoryChange = (img: string) => {
      setSelectedImage(img)
   };
   return (
      <>
         <div className='flex-between gap-4'>
            {config.CATEGORIES.map((cat, i) => (
               <Button type='button' onClick={() => handleCategoryChange(cat.image)} key={i}>{cat.name}</Button>
            ))}
         </div>
         <div className="mt-6">
            <ul className="flex items-center gap-6">
               {config.CATEGORIES.find(cat => cat.name === selectedCategory)?.items.map((item, i) => (
                  <Toggle variant={"outline"} aria-label="Toggle italic" onClick={() => setSlectedcategory(item)} key={i}>
                     <b>{item}</b>
                  </Toggle>
               ))}
            </ul>
         </div>
      </>
   )
}

export default CategoryButton
