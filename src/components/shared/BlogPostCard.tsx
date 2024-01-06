import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface IBlogCard {
   title: string
   descrition: string
   image: string
   slug: string
}

const BlogPostCard = ({ title, descrition, image, slug }: IBlogCard) => {
   return (
      <div className='col-span-12 sm:col-span-6 lg:col-span-4 space-y-7'>
         <Link href={`blog-post/${slug}`}>
            <div className='relative h-32'>
               <Image src={image} className='object-cover rounded-lg' fill sizes='100%' loading='lazy' alt={title} />
            </div>
         </Link>
         <div className='space-y-2'>
            <div className='h-[4.5rem]'>
               <h3 className='font-semibold text-[18px]'>{title}</h3>
            </div>
            <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vero culpa ullam blanditiis est numquam, </p>
            <div className='flex items-center gap-6'>
               <div className='w-8 h-8 relative'>
                  <Image src='/ps.webp' className='rounded-lg' fill sizes='100%' loading='lazy' alt='user' />
               </div>
               <div className='grid text-xs'>
                  <b>Reinaldo Vombo</b>
                  <span>Úsuario da comunidade</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogPostCard
