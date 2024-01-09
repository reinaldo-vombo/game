'use client'

import { useProvider } from "@/context/Provider"
import { Button } from "./ui/button"
import InputField from "./shared/InputField"
import Link from "next/link"
import { Icon } from "../../config/icon"
import Favorites from "./shared/Favorites"
import Image from "next/image"

const NavItems = () => {
   const { handleShowCart, handleShowSidebar, cart, user } = useProvider()
   return (
      <>
         <Button type="button" onClick={handleShowSidebar} className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </Button>
         <InputField />
         <div className='items-center justify-between gap-4 hidden md:flex'>
            {process.env.NODE_ENV === 'development' && (
               <Link href='/studio' target="_blank">
                  <Button size='sm' variant='ghost'>
                     <Icon.pencil className='h-5 w-5' />
                  </Button>
               </Link>
            )}
            <Favorites imgPath='with-heart.gif' className='secondary rounded-2xl flex items-center justify-center w-14 h-14' />
            <Button type='button' onClick={handleShowCart} aria-label='icon' className='relative secondary rounded-2xl flex items-center justify-center w-14 h-14'>
               <Image src='/shopping.gif' width={40} height={40} alt='icon' />
               {cart.length >= 1 && (
                  <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
               )}
            </Button>
         </div>
      </>
   )
}

export default NavItems
