'use client'

import { useProvider } from "@/context/Provider"
import Image from "next/image"
import VideoShow from "./form/VideoShow"
import TabButton from "./TabNutton"
import GameSlider from "./GameSlider"
import Button from "./Button"
import { GameItem } from "@/interface/product"
import { config } from "../../../config/siteConfig"

const ProductInfo = ({ product }: GameItem) => {
   const { isMutted, setIsMutted, setHideInfo, hideInfo, showVideo, handleShowVideo } = useProvider()

   return (
      <>
         <div className='relative overflow-hidden'>
            <video loop={true} autoPlay={true} poster={product.cover_image} controls={false} muted={isMutted} className="absolute min-w-full rounded-lg hidden sm:block">
               <source src={product.video_file} />
            </video>
            <div className='absolute top-[38px] right-0 flex-between gap-3 z-20'>
               <button type='button' onClick={() => setIsMutted(prev => !prev)}>
                  <Image src='/song.gif' className='w-[1.5rem] h-auto' width={50} height={50} alt='sond icon' />
               </button>
               <button type='button' onClick={() => setHideInfo(prev => !prev)}>
                  <Image src='/view.gif' className='w-[1.5rem] h-auto' width={50} height={50} alt='sond icon' />
               </button>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-r from-black to-transparent ${hideInfo ? '-translate-x-[900px]' : 'translate-x-0'}`} />
            <div className={`absolute inset-0 bg-gradient-to-t from-black from-10% to-transparent to-20% ${hideInfo ? '-translate-x-[900px]' : 'translate-x-0'}`} />
            <div className={`flex flex-col items-center justify-start relative z-10 md:p-4 gap-4 transition-transform md:flex-row ${hideInfo ? '-translate-x-[900px]' : 'translate-x-0'}`}>
               {showVideo && (
                  <VideoShow videoUrl={product.video_file} />
               )}
               <div className='relative'>
                  <Image src={product.poster} className='object-cover rounded-md h-[29rem] w-[18rem]' width={400} height={400} alt={product.title} />
                  <button type='button' className='sm:hidden absolute inset-0 flex-center' onClick={handleShowVideo}>
                     <Image src='/play.gif' className='object-cover rounded-md h-[5rem] w-[5rem]' width={400} height={400} alt={product.title} />
                  </button>
               </div>
               <div className='space-y-5 text-center md:text-left'>
                  <h2 className='h1-semibold'>{product.title}</h2>
                  <p>{product.cumpuny}</p>
                  <div className='flex items-center flex-wrap gap-4'>
                     Disponível para
                     {product.avalible.map((item, i) => (
                        <span key={i}>
                           <Image src={item} className='md:w-auto md:h-auto' width={60} height={60} alt='platform' />
                        </span>
                     ))}
                  </div>
                  <h3 className='h3-bold'>{product.price}(kz)</h3>
                  <div className="flex items-center gap-6">
                     {product.payment.map((item, i) => (
                        <Image src={item} width={30} height={30} alt="payment icon" key={i} />
                     ))}
                  </div>
                  {product.psn && (
                     <span className='flex items-center gap-3'>
                        <span>
                           <Image src='/psn-.png' width={30} height={30} alt='pns' />
                        </span>
                        <span className='text-[#fcc71d] w-[20rem]'>{product.psn}</span>
                     </span>
                  )}
                  <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
                     <Button>Compar</Button>
                     <button type='button' aria-label='icon' className='flex items-center justify-center w-14 h-14'>
                        <Image src='/heart.gif' width={40} height={40} alt='icon' />
                     </button>
                     <button type='button' aria-label='icon' className='flex items-center justify-center w-14 h-14'>
                        <Image src='/shopping.gif' width={40} height={40} alt='icon' />
                     </button>
                  </div>
                  <div className='space-y-3 grid'>
                     <div className="flex items-center gap-3">
                        <Image src='/people.png' width={20} height={20} alt="icon" />
                        <span>{product.playes}jogador</span>
                     </div>
                     {product.online && (
                        <div className="flex items-center gap-3">
                           <Image src='/no-internet.png' width={20} height={20} alt="icon" />
                           <span>Pronto para jogos offline</span>
                        </div>
                     )}
                     <div className="flex items-center gap-3">
                        <Image src='/game-controller.png' width={20} height={20} alt="icon" />
                        <span>Compatível com a Reprodução remota</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Image src='/vibration-game.png' width={20} height={20} alt="icon" />
                        <span>Compatível com a função de vibração e o efeito de gatilho (comando sem fios DualSense)</span>
                     </div>
                  </div>
               </div>
            </div>
            {product.violance && (
               <div className='flex items-center justify-center gap-6 relative md:justify-end'>
                  {product.violance.map((pg, i) => (
                     <Image src={pg} className='w-8 h-auto' width={60} height={60} alt='platform' key={i} />
                  ))}
               </div>
            )}
         </div>
         <div className='mt-8'>
            <div className='gap-7 mt-9 p-4' style={{ background: `${product.color}` }}>
               <TabButton tabs={product.info} hasBg={true} />
            </div>
            <div className='gap-7 mt-9 p-4 bg-cover bg-center' style={{ backgroundImage: `url(${product.alt_cover})` }}>
               <TabButton tabs={product.images} color={product.color} hasBg={false} />
            </div>
         </div>
         <div className='mt-8 space-y-6'>
            <div className='text-center sm:text-left'>
               <h2 className='h2-bold'>Jogos relacionados</h2>
            </div>
            <GameSlider data={config.GAMES} />
         </div>
      </>
   )
}

export default ProductInfo