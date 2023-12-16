import React from 'react'
import Slider from '../shared/Slider'
import { config } from '../../../config/siteConfig'
import GameSlider from '../shared/GameSlider'
import FilterDropDown from '../shared/Dropdwon'

const Hero = () => {
   const gameToFilter = ['jogo', 'Acessórios PS5'];
   const gameFilter = config.GAMES.filter(item => item.category && item.category.some(cat => gameToFilter.includes(cat.toLowerCase())));

   return (
      <section>
         <Slider />
         <div className='mt-6'>
            <div className='flex-between mb-4'>
               <div className='space-y-4'>
                  <h2>Jogos com disconto</h2>
                  <FilterDropDown data={config.CATEGORIES} />
               </div>
               <h2 className='font-semibold text-blue-500'>Mais Jogos</h2>
            </div>
            <div className='space-y-32'>
               <GameSlider data={gameFilter} />
               <GameSlider data={config.ACESSORY} />
            </div>
         </div>
      </section>
   )
}

export default Hero