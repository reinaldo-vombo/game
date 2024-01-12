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
import { fetchProducts } from '@/app/action'
import { GameItem } from '@/interface/product'
import GameCard from '../shared/GameCard'
import { useQuery } from '@tanstack/react-query'

const Categories = () => {
   const [api, setApi] = useState<CarouselApi>()
   const [slectedcategory, setSlectedcategory] = useState('jogo')
   const [selectedImage, setSelectedImage] = useState('')
   const [filterdProduct, setFilterdProduct] = useState<GameItem[]>([])

   const { data, error, isPending } = useQuery({
      queryKey: [`sortproducts${slectedcategory}`],
      queryFn: () => fetchProducts(slectedcategory),
      initialData: filterdProduct
   })

   useEffect(() => {
      if (!api) {
         return
      }
      api.on("select", () => {
         console.log('move');

      })

   }, [api])

   useEffect(() => {
      const getProducts = async () => {
         try {
            const newProducts = await fetchProducts(slectedcategory)
            setFilterdProduct(newProducts)

         } catch (error) {
            console.log(error);

         }
      }
      getProducts()
   }, [slectedcategory])


   return (
      <section className='bg-cover bg-center' style={{ backgroundImage: `url(${selectedImage ? selectedImage : '/category-banner.webp'})` }}>
         <div className='flex justify-end'>
            <div className='w-[70%]'>
               <CategoryButton setSlectedcategory={setSlectedcategory} setSelectedImage={setSelectedImage} />
               <div className='mt-[12.75rem]'>
                  <Carousel
                     setApi={setApi}
                     opts={{
                        align: "start",
                     }}
                     className="w-full max-w-4xl"
                  >
                     <CarouselContent >
                        {error && <p>Error fetching products: {error.message}</p>}
                        {data && (
                           <>
                              {data.map((item, index) => (
                                 <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="">
                                       <Card className='border-slate-500'>
                                          <CardContent className="flex aspect-square items-center justify-center p-6">
                                             {isPending && <p>Loading products...</p>}
                                             <GameCard
                                                postId={item._id}
                                                image={item.image}
                                                title={item.title}
                                                slug={item.slug}
                                                price={item.price}
                                                discount={item.discount}
                                             />
                                          </CardContent>
                                       </Card>
                                    </div>
                                 </CarouselItem>
                              ))}
                           </>
                        )}
                     </CarouselContent>
                     {/* <CarouselPrevious className='absolute top-0' />
                     <CarouselNext className='absolute top-0 right-0' /> */}
                  </Carousel>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Categories
