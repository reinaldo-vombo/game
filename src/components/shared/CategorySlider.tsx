'use client'
import React from 'react'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { config } from '../../../config/siteConfig'
import Image from 'next/image'

const CategorySlider = () => {
   return (
      <>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}

            pagination={{
               clickable: true,
            }}
            modules={[FreeMode,]}
            className="mySwiper"
         >
            {config.GAMES.map((item, i) => (
               <SwiperSlide key={i}>
                  <div>
                     <Image src={item.poster} className='h-[16.5rem] w-auto object-cover rounded-lg' width={400} height={400} alt={item.title} />
                  </div>

               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}

export default CategorySlider
