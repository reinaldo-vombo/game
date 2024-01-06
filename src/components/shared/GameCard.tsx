import Image from 'next/image'
import { toast } from "sonner"
import Link from 'next/link'
import React from 'react'
import ByButton from './Button'
import { IGameCard } from '@/interface/product'
import { useProvider } from '@/context/Provider'
import { Button } from '../ui/button'
import { formatNumber } from '../../../config/siteConfig'

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
      toast(`${title} adicionado ao carrinho`)
      addToCart(itemToAdd);
   };

   return (
      <div className='space-y-7'>
         <div className='h-40 relative'>
            <Link href={`/product/${slug}`}>
               <Image src={image} className='w-full h-full rounded-md object-cover' width={600} height={600} alt='game image' />
            </Link>
            <Button className='absolute p-0 top-0 right-0 w-6 h-6' aria-label='heart icon button'>
               <Image src='/icons/with-heart.gif' className='w-full h-full' width={24} height={24} alt='icon' />
            </Button>
         </div>
         <div className='space-y-4'>
            <h2 className='font-semibold'>{title}</h2>
            <div className='flex items-center justify-start gap-4'>
               <p className='primary p-1 rounded-md text-black'>-{discount}%</p>
               <b>{formatNumber(price)}(kz)</b>
            </div>
            <div className='flex items-center justify-between gap-4'>
               <ByButton>Comprar</ByButton>
               <Button type='button' className='w-8' onClick={handleAddToCart} aria-label='cart bag'>
                  <Image src='/shopping.gif' width={30} height={30} alt='icon' />
               </Button>
            </div>
         </div>
      </div>
   )
}

export default GameCard