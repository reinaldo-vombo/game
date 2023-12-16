import { IAceesory } from '@/interface/product'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const AssecoryCard = ({ discount, image, price, slug, title }: IAceesory) => {
   return (
      <div className='col-span-3 space-y-7'>
         <Link href={`/product/${slug}`} className="group">
            <Image src={image} className='w-64 h-[17rem] rounded-md' width={400} height={400} alt='' />
         </Link>
         <div className='space-y-4'>
            <h2 className='font-semibold'>{title}</h2>
            <div className='flex-start gap-4'>
               <p className='primary p-1 rounded-md'>-{discount}%</p>
               <b>{price}(kz)</b>
            </div>
            <div className='flex items-center justify-between gap-4'>
               <Button>Comprar</Button>
               <button type='button' className='w-8' aria-label='cart bag'>
                  <Image src='/shopping.gif' width={30} height={30} alt='icon' />
               </button>
            </div>
         </div>
      </div>
   )
}

export default AssecoryCard