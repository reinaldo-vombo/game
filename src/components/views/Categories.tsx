'use client'
import { useState } from 'react'
import CategoryButton from '../shared/CategoryButton'
import CategorySlider from '../shared/CategorySlider'

const Categories = () => {
   const [selectedImage, setSelectedImage] = useState('')

   return (
      <section className='bg-cover bg-center' style={{ backgroundImage: `url(${selectedImage})` }}>
         <div className='flex justify-end'>
            <div className='w-[70%]'>
               <CategoryButton setSelectedImage={setSelectedImage} />
               <div className='mt-[12.75rem]'>
                  <CategorySlider />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Categories
