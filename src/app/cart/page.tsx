import React from 'react'
import { config } from '../../../config/siteConfig'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
   return (
      <section>
         <div className='bg-cover bg-center h-96 rounded-lg p-3' style={{ backgroundImage: 'url(/favorite.jpg)' }}>
            <div>
               <h2 className='text-left h1-bold '>TRAZ OS TEUS FAVORITOS CONTIGO</h2>
            </div>
         </div>
         <div className='grid gap-3 grid-cols-12 mt-12'>
            {config.GAMES.map((item, i) => (
               <div className='col-span-3' key={i}>
                  <Link href={`/product/${item.slug}`}>
                     <Image src={item.poster} className='w-[27rem] rounded-md object-cover' width={400} height={400} alt='' />
                  </Link>
               </div>
            ))}
         </div>
      </section>
   )
}
