import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '../../../config/icon'

const SubNav = () => {
   return (
      <nav className='px-4'>
         <div className="flex-between">
            <div>
               <Link href='/' className='flex items-center gap-2'>
                  <Image src='/category.gif' className='w-12 h-12' width={48} height={48} alt='Gamestaore Logo' />
                  <h2>GameStore.<span className='text-[#2993FA]'>Blog</span></h2>
               </Link>
            </div>
            <div className='flex items-center gap-6'>
               <button>
                  <Icon.light width={25} />
               </button>
               <button>
                  <Icon.user width={25} />
               </button>
               <div className='relative flex items-center'>
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                     <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Icon.search width={16} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                     </div>
                     <input type="text" id="simple-search" className="bg-gray-700 border border-gray-600 text-gray-500 text-sm rounded-lg focus:ring-0 focus-within:outline-none focus:border-0 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-0 dark:placeholder-gray-400 dark:text-white" placeholder="Search branch name..." />
                  </div>

               </div>
            </div>
         </div>
      </nav>
   )
}

export default SubNav
