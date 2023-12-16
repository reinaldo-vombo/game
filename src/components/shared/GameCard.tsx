import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { IGameCard } from '@/interface/product'
import { useProvider } from '@/context/Provider'

const GameCard = ({ title, discount, image, price, slug, _id }: IGameCard) => {
   const { addToCart } = useProvider()
   const handleAddToCart = () => {
      const itemToAdd = {
         _id,
         title,
         image,
         price,
         quantity: 1
      };
      addToCart(itemToAdd);
   };

   return (
      <div className='space-y-7'>
         <div className='h-40 relative'>
            <Link href={`/product/${slug}`}>
               <Image src={image} className='w-full h-full rounded-md object-cover' width={600} height={600} alt='game image' />
            </Link>
            <button className='absolute top-0 right-0'>
               <Image src='/heart.gif' className='w-6 h-6' width={20} height={20} alt='icon' />
            </button>
         </div>
         <div className='space-y-4'>
            <h2 className='font-semibold'>{title}</h2>
            <div className='flex-start gap-4'>
               <p className='primary p-1 rounded-md'>-{discount}%</p>
               <b>{price}(kz)</b>
            </div>
            <div className='flex items-center justify-between gap-4'>
               <Button>Comprar</Button>
               <button type='button' className='w-8' onClick={handleAddToCart} aria-label='cart bag'>
                  <Image src='/shopping.gif' width={30} height={30} alt='icon' />
               </button>
            </div>
         </div>
      </div>
   )
}

export default GameCard