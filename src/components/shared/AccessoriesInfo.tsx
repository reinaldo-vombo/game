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
const AccessoriesInfo = () => {
   const setting = true
   return (
      <div className="flex flex-col items-center justify-center">
         <div className="relative ">
            <Image src='/ps5-c.png' className="w-[500px] h-[500px]" width={500} height={500} alt="" />
         </div>
         {setting ? (
            <Carousel className="w-full max-w-sm">
               <CarouselContent className="-ml-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                     <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                           <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                 <span className="text-2xl font-semibold">{index + 1}</span>
                              </CardContent>
                           </Card>
                        </div>
                        <p className="text-center">jjj</p>
                     </CarouselItem>
                  ))}
               </CarouselContent>
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
