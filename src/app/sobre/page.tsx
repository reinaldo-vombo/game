import SubNav from '@/components/shared/SubNav'
import Follow from '@/components/views/Follow'
import Footer from '@/components/views/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
   return (
      <>
         <section>
            <SubNav />
            <div className='p-40 bg-cover bg-center overlay relative' style={{ backgroundImage: 'url(/about.jpg)' }}>
               <div className='relative'>
                  <div className='text-center'>Sobre Gamestore</div>
               </div>
            </div>
            <div className='container relative mt-11 space-y-7 text-slate-500'>
               <div className="flex-between">
                  <div className="w-full md:w-1/2 space-y-6">
                     <h2 className='h2-bold'>Quem somos...</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa obcaecati dolorem necessitatibus, atque recusandae quisquam aspernatur sequi sapiente harum exercitationem dignissimos provident itaque expedita animi eum quo, ipsam voluptate officiis asperiores. Earum aperiam aliquid veniam minus, voluptate distinctio maxime.</p>
                     <Image src='/cb-p1.jpg' className='rounded-md w-[31rem]' width={900} height={900} alt='x-box contrller' />

                  </div>
                  <div className="w-full md:w-1/2">
                     <Image src='/gr/about-c.png' className='absolute right-0 top-[-65px] w-[31rem]' width={900} height={900} alt='x-box contrller' />
                  </div>
               </div>
               <Follow />
            </div>
            <div className='bg-black py-8 mt-10'>
               <div className="container text-center space-y-9">
                  <h2 className='h3-bold'>Contacta-nos</h2>
                  <div className='space-y-4'>
                     <h3 className='base-semibold'>Ajuda e assistência</h3>
                     <p>Se precisares de ajuda relativamente a qualquer consola, produto ou serviço da <br /> <span className='text-[#2993FA] font-semibold'>Gamestore</span> , a melhor forma de obteres assistência é através do nosso centro de suporte dedicado.</p>
                     <div>
                        <Link href='/contactos' className='primary rounded-lg p-2'>Ajuda e assistência</Link>

                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default page
