'use client'
import React from 'react'

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import { ISliderData } from "@/interface/product"
import GameCard from './GameCard'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts, } from '@/app/action'

const ProductSlider = ({ product, showArrows, category }: ISliderData) => {
   const { data, error, isPending } = useQuery({
      queryKey: [`products${category}`],
      queryFn: () => fetchProducts(category),
      initialData: product
   })
   if (error) <h2>{error.message}</h2>
   if (data)
      return (
         <Carousel className="w-full">
            <CarouselContent className="-ml-1">
               {data.map((item, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                     <div className="">
                        <Card className='border-none'>
                           <CardContent className="flex aspect-square items-center justify-center p-6">
                              <GameCard
                                 _id={item._id}
                                 image={item.image}
                                 title={item.title}
                                 slug={item.slug}
                                 price={item.price}
                                 discount={item.discount}
                              />
                           </CardContent>
                        </Card>
                     </div>
                     {/* <p className="text-center">jjj</p> */}
                  </CarouselItem>
               ))}
            </CarouselContent>
            {showArrows && (
               <>
                  <CarouselPrevious />
                  <CarouselNext />
               </>
            )}
         </Carousel>
      )
}

export default ProductSlider
