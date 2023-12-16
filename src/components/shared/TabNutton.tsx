'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Gallery from './Gallery';
import Modal from './Modal';
import { useProvider } from '@/context/Provider';
import { TabItem } from '@/interface/product';

interface Tab {
   tabs: TabItem[]
   color?: string
   hasBg: boolean
}

const TabButton = ({ tabs, color, hasBg }: Tab) => {
   const { handleShowGallery, showModalGallery } = useProvider()

   const [activeTab, setActiveTab] = useState("tab1");
   const [activeImg, setActiveImg] = useState("img1");
   const [selectedImage, setSelectedImage] = useState<null | StaticImport>(null);
   const [currentImage, setCurrentImage] = useState<string | StaticImport>('');
   const [currentIndex, setcurrentIndex] = useState<number | null>(null);

   const handleImagePreviw = (image: any, index: any) => {
      setSelectedImage(image)
      setActiveImg(`img${index + 1}`)
   }
   const handleShowImagePreviw = (image: string, index: number) => {
      setCurrentImage(image)
      handleShowGallery()
      setcurrentIndex(index)
   }
   const handleselectImage = (image: string, index: number) => {
      setCurrentImage(image)
      setcurrentIndex(index)
   }
   return (
      <div>
         <div className='mt-8'>
            <Tabs defaultValue="tab1" className="w-full">
               <TabsList className='flex flex-col items-center justify-center md:flex-row'>
                  {tabs.map((item, i) => (
                     <TabsTrigger className={`${activeTab === `tab${i + 1}` ? 'bg-black text-white' : 'text-black'} w-full `} value={`tab${i + 1}`} key={i} onClick={() => setActiveTab(`tab${i + 1}`)}>{item.name}</TabsTrigger>
                  ))}
               </TabsList>
               <div className={`p-3 mt-9 ${hasBg && 'bg-black'}`}>
                  {tabs.map((inf, i) => (
                     <TabsContent className='flex justify-between flex-col sm:grid lg:grid-cols-12 sm:place-content-center gap-4' value={`tab${i + 1}`} key={i}>
                        {inf?.type === 'content' ? (
                           <>
                              <div className="col-span-6">
                                 <Image src={selectedImage || inf.image[0]} className='w-full' width={500} height={500} alt='' />
                              </div>
                              <div className="col-span-6 space-y-6">
                                 <p className='text-[22px]'>{inf.desc}</p>
                                 <div className='flex flex-wrap items-center gap-4'>
                                    {inf.image.map((img, i) => (
                                       <Image src={img} className={`${activeImg === `img${i + 1}` ? 'outline outline-4 outline-indigo-500' : ''} w-full lg:w-36 object-cover`} width={400} height={400} alt='' key={i} onClick={() => handleImagePreviw(img, i)} />
                                    ))}
                                 </div>
                              </div>
                           </>
                        ) : (
                           <>
                              {inf.image.map((src, i) => (
                                 <div className='md:col-span-3 lg:col-span-6' key={i}>
                                    <button type='button' aria-label='gallery' onClick={() => handleShowImagePreviw(src, i)}>
                                       <Image src={src} className='rounded-lg w-full' width={500} height={500} alt='' style={{ outline: `1px solid ${color}` }} />
                                    </button>
                                    <Modal isOpen={showModalGallery} setIsOpen={handleShowGallery}>
                                       <Gallery
                                          images={inf.image}
                                          image={currentImage}
                                          selectImage={handleselectImage}
                                          closeModal={handleShowGallery}
                                          index={currentIndex}
                                          color={color}
                                       />
                                    </Modal>
                                 </div>
                              ))}
                           </>
                        )}
                     </TabsContent>
                  ))}
               </div>
            </Tabs>
         </div>
      </div>
   )
}

export default TabButton