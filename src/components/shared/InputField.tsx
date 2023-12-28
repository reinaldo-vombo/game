import Image from "next/image"
import { useState } from "react"
import { config } from "../../../config/siteConfig"
import Link from "next/link"

const InputField = () => {
   const [searchQuery, setSearchQuery] = useState('')

   const filterdList = config.GAMES.filter(item => item.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
   return (
      <div className='w-full md:w-[25rem]'>
         <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
         <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
               <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
               </svg>
            </div>
            <input type="search" onChange={(e) => setSearchQuery(e.target.value)} className="block border-none outline-none w-full p-4 ps-10 text-sm text-white border rounded-2xl secondary focus-within:outline-none  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Mockups, Logos..." />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               <Image src='/category.gif' width={16} height={16} alt='' />
            </button>
            {searchQuery !== '' ? (
               <div className='absolute z-10 bg-gray-500 rounded-md w-full p-2'>
                  <ul className='text-black'>
                     {filterdList.map((list, i) => (
                        <li key={i} className='hover:bg-slate-200 hover:text-black rounded-md p-1 text-white text-lg'>
                           <Link href={`/product/${list.slug}`}>
                              {list.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            ) : null}
         </div>
      </div>
   )
}

export default InputField
