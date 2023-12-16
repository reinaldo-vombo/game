'use client'
import React from 'react'
import Image from 'next/image'
import { useProvider } from '@/context/Provider'
import Link from 'next/link'

const NavBar = () => {
   const { handleShowCart, handleShowSidebar } = useProvider()
   return (
      <header className='hidden md:block text-white'>
         <nav className='flex items-center justify-between px-10 py-6 lg:ml-64'>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" onClick={handleShowSidebar} className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
               <span className="sr-only">Open sidebar</span>
               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
               </svg>
            </button>
            <div className='w-[25rem]'>
               <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
               <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                     <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                     </svg>
                  </div>
                  <input type="search" id="default-search" className="block border-none outline-none w-full p-4 ps-10 text-sm text-gray-900 border rounded-2xl secondary focus-within:outline-none  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Mockups, Logos..." />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     <Image src='/category.gif' width={16} height={16} alt='' />
                  </button>
               </div>
            </div>
            <div className='items-center justify-between gap-4 hidden lg:flex'>
               <Link href='/cart' type='button' aria-label='icon' className='secondary rounded-2xl flex items-center justify-center w-14 h-14'>
                  <Image src='/heart.gif' width={40} height={40} alt='icon' />
               </Link>
               <button type='button' onClick={handleShowCart} aria-label='icon' className='relative secondary rounded-2xl flex items-center justify-center w-14 h-14'>
                  <Image src='/shopping.gif' width={40} height={40} alt='icon' />
                  <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
               </button>
               <Link href='/auth/' aria-label='icon' className='secondary relative rounded-2xl flex items-center justify-center gap-7 w-14 md:w-44 h-14'>
                  <Image src='/user.png' className='rounded-full object-cover' width={40} height={40} alt='icon' />
                  <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                  <span className='hidden md:block'>Reinaldo</span>
               </Link>
            </div>
         </nav>
      </header>
   )
}

export default NavBar