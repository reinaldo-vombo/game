'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import GameCard from './GameCard';
import { ISliderData } from '@/interface/product';

const GameSlider = ({ data }: ISliderData) => {
   return (
      <>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            breakpoints={{
               500: {
                  slidesPerView: 1,
                  spaceBetween: 5,
               },
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
               },
               1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
               },
            }}
            pagination={{
               clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
         >
            {data.map((item, i) => (
               <SwiperSlide key={i}>
                  <GameCard
                     _id={item._id}
                     image={item.image}
                     title={item.title}
                     slug={item.slug}
                     price={item.price}
                     discount={item.discount}
                  />

               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}

export default GameSlider