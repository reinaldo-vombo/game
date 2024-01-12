'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import { formatNumber } from "../../../config/siteConfig"
import { Dispatch, SetStateAction, useState } from "react"
interface IProps {
   images: {
      name: string
      image: string
      price: number
   }[]
   posterImage: string
   setSkinPrice: Dispatch<SetStateAction<number>>
}
const AccessoriesInfo = ({ images, posterImage, setSkinPrice }: IProps) => {
   const [selectedImage, setSelectedImage] = useState(posterImage)
   const handleImageSwap = (src: string, price: number) => {
      setSelectedImage(src)
      setSkinPrice(price)
   }
   const handleClearChanges = () => {
      setSelectedImage(posterImage)
      setSkinPrice(0)
   }
   const setting = true
   return (
      <div className="flex flex-col items-center justify-center">
         <div className="relative ">
            <Image src={selectedImage} className="lg:w-[500px] lg:h-[500px]" width={500} height={500} alt="" />
         </div>
         {setting ? (
            <Carousel className="w-full max-w-sm">
               <CarouselContent className="-ml-1">
                  {images.map((item, index) => (
                     <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                           <Card className="border-indigo-600">
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                 <Image src={item.image} width={500} height={500} alt={item.name} onClick={() => handleImageSwap(item.image, item.price)} />
                              </CardContent>
                           </Card>
                        </div>
                        <div className="text-center">
                           <p className="text-center">{item.name}</p>
                           <b className="text-center">{formatNumber(item.price)}(kz)</b>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <div className="flex-center mt-6">
                  <Button className="bg-red-500 transition-colors hover:bg-red-700" onClick={handleClearChanges}>Cancelar</Button>
               </div>
               <CarouselPrevious />
               <CarouselNext />
            </Carousel>
         ) : (
            <div className="flex-center gap-8">
               <Button>1</Button>
               <Button>2</Button>
               <Button>3</Button>
               <Button>4</Button>
            </div>
         )}
      </div>
   )
}

export default AccessoriesInfo
