import React from 'react'
import Slider from '../shared/Slider'
import { config } from '../../../config/siteConfig'
import GameSlider from '../shared/GameSlider'
import { fetchProducts } from '@/app/action'

const Hero = async () => {
   const Newproducts = await fetchProducts('jogo')
   const Acessóriosproducts = await fetchProducts('Acessórios PS5')
   return (
      <section>
         <Slider />
         <div className='mt-6'>
            <div className='flex-between mb-4'>
               <div className='space-y-4'>
                  <h2 className='h3-bold'>Novos jogos</h2>
               </div>
               <h2 className='font-semibold text-blue-500'>Mais Jogos</h2>
            </div>
            <div className='space-y-32'>
               <GameSlider data={Newproducts} />
               <div className='space-y-5'>
                  <h2 className='h3-bold'>Acessórios</h2>
                  <GameSlider data={Acessóriosproducts} />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero