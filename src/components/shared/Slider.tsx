'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { config } from '../../../config/siteConfig';
import Image from 'next/image';
import ModalDialog from './ModalDialog';

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
                  <Image src={image.image} className='w-full h-full object-cover rounded-lg' width={900} height={900} alt='image' />
                  <div className='absolute inset-0 bg-[#00000075] p-4'>
                     <button type='button' aria-label='icon' className='secondary rounded-md ml-auto flex items-center justify-center w-8 h-8'>
                        <Image src={image.like ? '/red-heart.gif' : '/heart.gif'} width={40} height={40} alt='icon' />
                     </button>
                     <div className='mt-20 space-y-4'>
                        <h2 className='h2-bold'>{image.title}</h2>
                        <div className='flex items-center gap-4'>
                           <button type='button' className='rounded-lg p-2 bg-white text-slate-500 transition-colors hover:primary'>Compar</button>
                           <ModalDialog
                              image={<Image src='/play.gif' className='w-5 h-[2.25rem]' width={20} height={20} alt='icon' />}
                              className='bg-[#ffffff6e] w-10 h-10 rounded-full flex items-center justify-center'>

                              <video
                                 controls={true}
                                 muted={false}
                                 autoPlay={true}
                                 loop={false}
                              >
                                 <source src={image.video} />
                              </video>
                           </ModalDialog>
                           {/* <button type='button' onClick={handleShowVideo} className='bg-[#ffffff6e] w-10 h-10 rounded-full flex items-center justify-center' aria-label='play icon'>
                              <Image src='/play.gif' className='w-5 h-[2.25rem]' width={20} height={20} alt='icon' />
                           </button> */}
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