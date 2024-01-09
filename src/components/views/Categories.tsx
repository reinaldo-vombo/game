'use client'
import { useEffect, useState } from 'react'
import CategoryButton from '../shared/CategoryButton'
import CategorySlider from '../shared/CategorySlider'
import { Card, CardContent } from "@/components/ui/card"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"

const Categories = () => {
   const [api, setApi] = useState<CarouselApi>()
   const [selectedImage, setSelectedImage] = useState('')

   useEffect(() => {
      if (!api) {
         return
      }

      api.on("select", () => {


      })

   }, [api])


   return (
      <section className='bg-cover bg-center' style={{ backgroundImage: `url(${selectedImage ? selectedImage : '/category-banner.webp'})` }}>
         <div className='flex justify-end'>
            <div className='w-[70%]'>
               <CategoryButton setSelectedImage={setSelectedImage} />
               <div className='mt-[12.75rem]'>
                  <Carousel
                     setApi={setApi}
                     opts={{
                        align: "start",
                     }}
                     className="w-full max-w-4xl"
                  >
                     <CarouselContent >
                        {Array.from({ length: 5 }).map((_, index) => (
                           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                 <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                       <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                 </Card>
                              </div>
                           </CarouselItem>
                        ))}
                     </CarouselContent>
                     <CarouselPrevious />
                     <CarouselNext />
                  </Carousel>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Categories
