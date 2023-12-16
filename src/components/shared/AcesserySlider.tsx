'use client'
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { ISliderData } from '@/interface/product';
import AssecoryCard from './AssecoryCard';

const AcesserySlider = ({ data }: ISliderData) => {
   return (
      <>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            // breakpoints={{
            //    500: {
            //       slidesPerView: 1,
            //       spaceBetween: 20,
            //    },
            //    640: {
            //       slidesPerView: 2,
            //       spaceBetween: 20,
            //    },
            //    768: {
            //       slidesPerView: 4,
            //       spaceBetween: 40,
            //    },
            //    1024: {
            //       slidesPerView: 5,
            //       spaceBetween: 50,
            //    },
            // }}
            pagination={{
               clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
         >
            {data.map((item, i) => (
               <SwiperSlide key={i}>
                  <AssecoryCard
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

export default AcesserySlider