'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { config } from '../../../config/siteConfig';
import Image from 'next/image';
import ModalDialog from './ModalDialog';
import { Button } from '../ui/button';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Slider = () => {

   return (
      <div className='banner'>
         <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
               rotate: 50,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
         >
            {config.BANNER.map((image, i) => (
               <SwiperSlide key={i}>
                  <Image
                     src={image.image}
                     className='w-full h-full object-cover rounded-lg'
                     fill
                     priority={false}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     alt={image.title}
                  />
                  <div className='absolute inset-0 bg-[#00000075] p-4'>
                     <Button type='button' aria-label='icon' className='secondary rounded-md ml-auto flex items-center justify-center relative w-8 h-8'>
                        <Image src={image.like ? '/icons/red-heart.gif' : '/icons/with-heart.gif'} fill sizes='100%' alt='heart icon' />
                     </Button>
                     <div className='mt-20 space-y-4'>
                        <h2 className='h2-bold'>{image.title}</h2>
                        <div className='flex items-center gap-4'>
                           <button type='button' className='rounded-lg p-2 bg-white text-slate-500 transition-colors hover:primary'>Compar</button>
                           <ModalDialog
                              image={<Image src='/play.gif' fill sizes='100%' alt='play icon' />}
                              className='bg-[#ffffff6e] w-8 h-8 rounded-full flex relative items-center justify-center'>
                              <video
                                 controls={true}
                                 muted={false}
                                 autoPlay={true}
                                 loop={false}
                              >
                                 <source src={image.video} />
                              </video>
                           </ModalDialog>

                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default Slider