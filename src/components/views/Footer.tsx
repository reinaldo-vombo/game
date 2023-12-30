import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { config } from '../../../config/siteConfig'
interface IFooter {
   className?: string
}

const Footer = ({ className }: IFooter) => {
   return (
      <footer className={`${className} rounded-lg shadow dark:bg-gray-900 m-4`}>
         <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
               <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <Image src="/category.gif" className='w-12 h-12' width={48} height={48} alt="Gamestaore Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gamestore</span>
               </Link>
               <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  {config.NAVA_LINK.map((item, i) => (
                     <li key={i}>
                        <Link href={item.link} className="hover:underline me-4 md:me-6">{item.name}</Link>
                     </li>
                  ))}

               </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Gamestore™</Link>. Todos Direitos Reservados.</span>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><Link href="/" className="hover:underline">Desenvolvido por </Link>Reinaldo Vombo</span>
         </div>
      </footer>


   )
}

export default Footer
