'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { config } from '../../../../config/siteConfig'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface ISelected {
   selectedType: string
   setSelectedType: Dispatch<SetStateAction<string>>
}

const SelecteButton = ({ selectedType, setSelectedType }: ISelected) => {

   const handleButtonClick = (title: string) => {
      setSelectedType(title);
   };

   return (
      <div className="flex-between relative">
         {config.FEEDBAK.map((item, i) => (
            <div key={i}>
               <Button type='button' className={`${selectedType === item.title ? 'bg-slate-500' : ''} grid px-0 w-16 h-16`} onClick={() => handleButtonClick(item.title)}>
                  <Image src={item.icon} className='w-[40px] h-[40px]' width={40} height={40} alt='icon' />
                  <span>{item.title}</span>
               </Button>
               <input type="text" name='type' readOnly className='absolute w-0 p-0 h-0' value={selectedType} />
            </div>
         ))}
      </div>
   )
}

export default SelecteButton
