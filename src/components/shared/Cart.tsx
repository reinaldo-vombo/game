'use client'
import { toast } from "sonner"
import { AnimatePresence, motion } from 'framer-motion'
import { useProvider } from '@/context/Provider'
import Image from 'next/image'
import Counter from './form/Counter'
import ByButton from './Button'
import { Icon } from '../../../config/icon'
import { Button } from "../ui/button"

const showCartAnimation = {
   hidden: { y: 1000 },
   visible: { y: 0, transition: { duration: 0.5, ease: 'linear' } },
}
const Cart = () => {
   const { showCart, cart, total, removeFromCart, decreaseQuantity, increaseQuantity } = useProvider()
   const handleRemoveFromCart = (id: string) => {
      removeFromCart(id);
      toast('Item removido')
   };
   const handleIncreaseQuantity = (id: string) => {
      increaseQuantity(id);
   };

   const handleDecreaseQuantity = (id: string) => {
      decreaseQuantity(id);
   };

   return (
      <AnimatePresence>
         {showCart && (
            <motion.aside variants={showCartAnimation} exit={{ y: 0 }} initial='hidden' animate={showCart ? 'visible' : 'hidden'} className="fixed right-0 left-0 top-0 bottom-0 md:top-[72px] md:left-auto md:right-[28px] z-40 w-full md:w-[33rem] h-[90vh] transition-transform translate-x-full sm:translate-x-0" aria-label="Sidebar">
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
                           <Button aria-label="close icon button" className='absolute p-0 top-0 right-0 z-20 bg-black w-12 h-12 rounded-full flex-center' onClick={() => handleRemoveFromCart(item._id)}>
                              <Icon.close width={30} />
                           </Button>
                        </li>
                     ))}
                  </ul>
                  <ByButton>Total <b>{total}(kz)</b></ByButton>
               </div>
            </motion.aside>
         )}
      </AnimatePresence>
   )
}

export default Cart