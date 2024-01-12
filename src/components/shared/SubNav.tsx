import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '../../../config/icon'
import { IUser } from '@/interface/user'
import { Input } from '../ui/input'
import DropdwonNenu from '../Dropdwon'
interface ISubNav {
   user?: IUser
   showLinks: boolean
}

const SubNav = ({ user, showLinks }: ISubNav) => {

   return (
      <nav className='px-4'>
         <div className="flex-between">
            <div>
               <Link href='/' className='flex items-center gap-2'>
                  <Image src='/category.gif' className='w-12 h-12' width={48} height={48} alt='Gamestaore Logo' />
                  <h2>GameStore.<span className='text-[#2993FA]'>Blog</span></h2>
               </Link>
            </div>
            {showLinks ? (
               <DropdwonNenu />
            ) : (
               <div className='flex flex-col items-center justify-between gap-6 w-full sm:w-auto sm:flex-row'>
                  <div className='flex items-center'>
                     <button>
                        <Icon.light width={25} />
                     </button>
                     {user ? (
                        <Image src={user.avatar} className='w-10 h-10 rounded-full' width={500} height={500} alt={user.name} />
                     ) : (
                        <button>
                           <Icon.user width={25} />
                        </button>
                     )}
                  </div>
                  <div className='relative flex items-center w-full'>
                     <label htmlFor="simple-search" className="sr-only">Search</label>
                     <div className="relative w-full">
                        <Input type="search" className="bg-gray-700 border border-gray-600 text-gray-500 text-sm rounded-lg focus:ring-0 focus-within:outline-none focus:border-0 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-0 dark:placeholder-gray-400 dark:text-white" placeholder="Pesquisa nóticias" />
                     </div>

                  </div>
               </div>
            )}
         </div>
      </nav>
   )
}

export default SubNav
