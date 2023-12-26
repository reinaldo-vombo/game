'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import html2canvas from 'html2canvas';
import React, { useState } from 'react'
import { Icon } from '../../../../config/icon'
import { config } from '../../../../config/siteConfig'
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
interface FormData {
  type: string;
  message: string;
  screenShoot: string;
}
interface IDialog {
  image: string
  clearScreenshot: () => void
}
const Feedbacks = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    type: '',
    message: '',
    screenShoot: ''
  })


  const handleInputChange = <T extends keyof FormData>(property: T, value: FormData[T]) => {
    setFormData((prevData) => ({
      ...prevData,
      [property]: value
    }));
    setSelectedType(property === 'type' ? value : '');
  };

  const takeScreenshot = async () => {
    try {
      const canvas = await html2canvas(document.body);

      // Convert the canvas to a data URL
      const screenshotDataUrl = canvas.toDataURL();

      // Update the state with the screenshot data URL
      setFormData((prevData) => ({
        ...prevData,
        screenShoot: screenshotDataUrl
      }));

    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };
  const clearScreenshot = () => {
    // Clear the screenShoot value
    handleInputChange('screenShoot', '');
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };
  return (
    <form className='space-y-10' onSubmit={handleSubmit}>
      <div className="flex-between">
        {config.FEEDBAK.map((item, i) => (
          <Button className={`${selectedType === item.title ? 'bg-slate-500' : ''} grid px-0 w-16 h-16`} onClick={() => handleInputChange('type', item.title)} key={i}>
            <Image src={item.icon} className='' width={40} height={40} alt='icon' />
            <span>{item.title}</span>
          </Button>
        ))}
      </div>
      <div className="grid gap-2">
        <Textarea className='bg-slate-600 border-none' placeholder="A tua messagem" onChange={(e) => handleInputChange('message', e.target.value)} />
        <div className="flex-between gap-3">
          <Button className="primary w-full disabled:bg-indigo-300" disabled={!formData.message.trim()}>Enviar</Button>
          {formData.screenShoot ? (
            <ImagePreview clearScreenshot={clearScreenshot} image={formData.screenShoot} />
          ) : (
            <Button className="primary w-16 p-0" onClick={takeScreenshot}>
              <Icon.camera width={50} className="w-4" />
            </Button>
          )}
        </div>
      </div>

    </form>
  )
}
const ImagePreview = ({ image, clearScreenshot }: IDialog) => {
  return (
    <AlertDialog >
      <AlertDialogTrigger>
        <Image src={image} className='w-12 h-8 object-cover rounded-md' width={400} height={400} alt='Captured Screenshot' />
      </AlertDialogTrigger>
      <AlertDialogContent className='bg-black border-slate-700'>
        <Image src={image} className='w-[33rem] h-[33rem] object-cover' width={400} height={400} alt='Captured Screenshot' />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={clearScreenshot}>Limpar</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}
export default Feedbacks
