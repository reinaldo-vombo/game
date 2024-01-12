'use client'
import { useProvider } from "@/context/Provider"
import Image from "next/image"
import TabButton from "./TabNutton"
import Button from "./Button"
import { ISgleGameItem } from "@/interface/product"
import { calculateTotalPrice, formatNumber } from "../../../config/siteConfig"
import ModalDialog from "./ModalDialog"
import AccessoriesInfo from "./AccessoriesInfo"
import { useState } from "react"
import ProductSlider from "./ProductSlider"
import { useQuery } from "@tanstack/react-query"
import { singleProduct } from '@/app/action'
import Skeleton from "./Skeleton"


const ProductInfo = ({ product, relatedproducts, category }: ISgleGameItem) => {
   const { data, error, isPending } = useQuery({
      queryKey: [`product`, product],
      queryFn: () => singleProduct(`${product.slug}`),
      initialData: product
   })

   const [isMutted, setIsMutted] = useState(true)
   const [hideInfo, setHideInfo] = useState(false)
   const [skinPrice, setSkinPrice] = useState(Number)
   const [isLoading, setIsLoading] = useState(true);


   const handleLoadStart = () => {
      setIsLoading(true);
   };

   const handleLoadedData = () => {
      setIsLoading(false);
   };
   const totalWithNewQuantity = calculateTotalPrice(data.price, skinPrice)

   if (error) return <p>Ocorreu um erro</p>

   if (isPending) {
      return <Skeleton />
   }
   if (data)
      return (
         <>
            <div className='relative overflow-hidden'>
               <video
                  loop={true}
                  autoPlay={true}
                  poster={data.cover_image}
                  controls={false}
                  muted={isMutted}
                  onLoadStart={handleLoadStart}
                  onLoadedData={handleLoadedData}
                  className="absolute min-w-full rounded-lg hidden sm:block">
                  <source src={data.video_file} />
               </video>
               <div className='hidden sm:flex-between absolute top-[38px] right-0  gap-3 z-20 pr-4'>
                  {isLoading ? (
                     <Image src='/spinner.gif' className="w-8 h-8" width={30} height={30} alt="loading icon" />
                  ) : (
                     <>
                        <button type='button' onClick={() => setIsMutted(prev => !prev)}>
                           <Image src='/song.gif' className='w-[50px] h-[50px]' width={50} height={50} alt='sond icon' />
                        </button>
                        <button type='button' onClick={() => setHideInfo(prev => !prev)}>
                           <Image src='/view.gif' className='w-[50px] h-[50px]' width={50} height={50} alt='sond icon' />
                        </button>
                     </>
                  )}
               </div>
               <div className={`absolute inset-0 bg-gradient-to-r from-black to-transparent ${hideInfo ? '-translate-x-[86rem]' : 'translate-x-0'}`} />
               <div className={`absolute inset-0 bg-gradient-to-t from-black from-10% to-transparent to-20% ${hideInfo ? '-translate-x-[86rem]' : 'translate-x-0'}`} />
               <div className={`flex flex-col items-center justify-start relative z-10 md:p-10 gap-4 transition-transform md:flex-row ${hideInfo ? '-translate-x-[86rem]' : 'translate-x-0'}`}>
                  {data.type === 'game' && (
                     <div className='relative'>
                        <Image src={data.poster} className='object-cover rounded-md h-[29rem] w-[18rem]' width={400} height={400} alt={data.title} />
                        <ModalDialog
                           className="object-cover rounded-md h-[5rem] w-[5rem] sm:hidden m-auto absolute inset-0 flex-center"
                           image={<Image src='/play.gif' className="w-[400px] h-[400px]" width={400} height={400} alt={data.title} />}
                        >
                           <video autoPlay={true} loop={false} controls={true} className='w-full h-full'>
                              <source src={data.video_file} />
                           </video>
                        </ModalDialog>
                     </div>
                  )}
                  {data.capas && (
                     <AccessoriesInfo images={data.capas} posterImage={data.poster} setSkinPrice={setSkinPrice} />
                  )}
                  <div className='space-y-5 text-center md:text-left px-3'>
                     <h2 className='h1-semibold'>{data.title}</h2>
                     <p>{data.cumpuny}</p>
                     <div className='flex items-center flex-wrap gap-4'>
                        <p>Disponível para</p>
                        {data.avalible?.map((item, i) => (
                           <span key={i}>
                              <Image src={item} className='md:w-[60px] md:h-[60px]' width={60} height={60} alt='platform' />
                           </span>
                        ))}
                     </div>
                     <div>
                        <h3 className={skinPrice > 0 ? 'base-semibold text-gray-500' : ' h3-bold'}>{formatNumber(data.price)}(kz)</h3>
                        {skinPrice !== 0 && (
                           <h3 className="text-green-400 h3-bold">{formatNumber(totalWithNewQuantity)}(kz)</h3>
                        )}
                     </div>

                     <div className="flex items-center justify-center sm:justify-start gap-6">
                        {data.payment.map((item, i) => (
                           <Image src={item} width={30} height={30} alt="payment icon" key={i} />
                        ))}
                     </div>
                     {data.psn && (
                        <span className='flex items-center justify-center sm:justify-start gap-3'>
                           <span>
                              <Image src='/psn-.png' className="w-[30] h-[30]" width={30} height={30} alt='pns' />
                           </span>
                           <span className='text-[#fcc71d] w-[20rem]'>{data.psn}</span>
                        </span>
                     )}
                     <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
                        <Button className="before:bg-yellow-300">Compar</Button>
                        <button type='button' aria-label='icon' className='flex items-center justify-center w-14 h-14'>
                           <Image src='/heart.gif' width={40} height={40} alt='icon' />
                        </button>
                        <button type='button' aria-label='icon' className='flex items-center justify-center w-14 h-14'>
                           <Image src='/shopping.gif' width={40} height={40} alt='icon' />
                        </button>
                     </div>
                     {/* <div className="space-y-5">
                     <b>Prepare-se para entrar em kombate, personalize sua arma</b>
                     <Button>Personalizar</Button>
                  </div> */}
                     {data.type === 'game' ? (
                        <div className='space-y-3 grid py-2'>
                           <div className="flex items-center gap-3">
                              <Image src='/people.png' width={20} height={20} alt="icon" />
                              <span>{data.playes}jogador</span>
                           </div>
                           {data.online && (
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
                     ) : null}
                  </div>
               </div>
               {data.violance && (
                  <div className='flex items-center justify-center gap-6 relative md:justify-end'>
                     {data.violance.map((pg, i) => (
                        <Image src={pg} className='w-8 h-auto' width={60} height={60} alt='platform' key={i} />
                     ))}
                  </div>
               )}
            </div>
            {/* <div className='mt-8'>
            <div className='gap-7 mt-9 p-4' style={{ background: `${data.color}` }}>
               <TabButton tabs={data.info} hasBg={true} />
            </div>
            <div className='gap-7 mt-9 p-4 bg-cover bg-center' style={{ backgroundImage: `url(${data.alt_cover})` }}>
               <TabButton tabs={data.images} color={data.color} hasBg={false} />
            </div>
         </div> */}
            <div className='mt-8 space-y-6 container'>
               <div className='text-center sm:text-left'>
                  <h2 className='h2-bold'>Jogos relacionados</h2>
               </div>
               <ProductSlider product={relatedproducts} category={category} />
            </div>
         </>
      )
}

export default ProductInfo