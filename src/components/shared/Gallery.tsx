import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { Icon } from '../../../config/icon'
import { Button } from '../ui/button'
interface IGallery {
   images: string[]
   image: string | StaticImport
   index: number | null
   color: string | undefined
   selectImage: (image: string, index: number) => void
   closeModal: () => void
}

const Gallery = ({ images, image, selectImage, index, color, closeModal }: IGallery) => {
   return (
      <div>
         <Image src={image} className='object-cover w-full h-full' fill alt='image' />
         <div className='absolute bottom-0 right-0 left-0 h-[80px] bg-black text-white p-2'>
            <div className='flex-center gap-6'>
               {images.map((src, i) => (
                  <Button key={i} onClick={() => selectImage(src, i)} aria-label='iamge preview'>
                     <Image src={src} className='w-28' width={90} height={90} alt='images' style={i === index ? { outline: `4px solid ${color}` } : {}} />
                  </Button>
               ))}
            </div>
         </div>
         <Button className='absolute p-0 top-0 right-0 bg-black rounded-full flex-center w-20 h-20' onClick={closeModal} aria-label='close icon'>
            <Icon.close width={40} className='text-yellow-50' />
         </Button>
      </div>
   )
}

export default Gallery