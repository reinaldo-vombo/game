import Image from 'next/image'
import React from 'react'
import { config } from '../../../config/siteConfig'
import Link from 'next/link'

const NewProducts = () => {
   return (
      <section className='new-games-gradient relative py-[50px] sm:h-[75vh] rounded-lg'>
         <Image src='/new-games-banner.webp' className='absolute inset-0 object-cover w-full h-full rounded-lg' width={900} height={900} alt='new game banner' />
         <div className="relative text-center sm:text-left m-auto inset-0 w-full px-8 md:px-0 md:w-[75%] text-white space-y-6">
            <h2 className='h2-bold'>
               ESTE MÊS <br /> <span></span>NA GAMESTORE
               <p className='text-base font-normal sm:w-64'>Espreita os maiores lançamentos do mês, junto dos destaques, guias e muito mais.</p>
            </h2>
            <div className='grid grid-cols-4 sm:grid-cols-12 place-content-center gap-4'>
               {config.NEWGAMES.map((game, i) => (
                  <div className='col-span-4 sm:col-span-4' key={i}>
                     <div className='shadow-md rounded-lg'>
                        <Link href={`/este-mes/${game.slug}`}>
                           <Image src={game.image} className='w-full h-full object-cover rounded-lg' width={500} height={500} alt={game.title} />
                        </Link>
                     </div>
                     <h3>{game.title}</h3>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default NewProducts
