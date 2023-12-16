'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useProvider } from '@/context/Provider'
import Image from 'next/image'
import Counter from './form/Counter'
import Button from './Button'
import { Icon } from '../../../config/icon'

const showCartAnimation = {
   hidden: { y: 1000 },
   visible: { y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
}
const Cart = () => {
   const { showCart, cart, total, removeFromCart, decreaseQuantity, increaseQuantity } = useProvider()
   const handleRemoveFromCart = (id: string) => {
      removeFromCart(id);
   };
   const handleIncreaseQuantity = (id: string) => {
      increaseQuantity(id);
   };

   const handleDecreaseQuantity = (id: string) => {
      decreaseQuantity(id);
   };

   return (
      <motion.aside variants={showCartAnimation} initial='hidden' animate={showCart ? 'visible' : 'hidden'} className="fixed top-[72px] right-[28px] z-40 w-[33rem] h-[90vh] transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
         <div className="h-full rounded-lg px-3 py-4 overflow-y-auto bg-[#1C2C3B] text-white dark:bg-gray-800">
            <ul>
               {cart.map((item, i) => (
                  <li className='relative flex flex-col items-center space-y-7 mb-8' key={i}>
                     <Image src={item.image} className='rounded-md object-cover w-full' width={400} height={400} alt='game' />
                     <div className='w-full flex flex-col justify-center gap-2'>
                        <h2 className='h3-bold'>{item.title}</h2>
                        <Counter
                           quantity={item.quantity}
                           decreaseQuantity={() => handleDecreaseQuantity(item._id)}
                           increaseQuantity={() => handleIncreaseQuantity(item._id)}
                        />
                        <b className='text-2xl'>{item.price * item.quantity}(kz)</b>
                     </div>
                     <button type='button' className='absolute top-0 right-0 z-20 bg-black w-12 h-12 rounded-full flex-center' onClick={() => handleRemoveFromCart(item._id)}>
                        <Icon.close width={30} />
                     </button>
                  </li>
               ))}
            </ul>
            <Button>Total <b>{total}(kz)</b></Button>
         </div>
      </motion.aside>
   )
}

export default Cart