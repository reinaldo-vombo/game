'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast } from "sonner"
import Image from 'next/image'
import html2canvas from 'html2canvas';
import React, { useRef, useState } from 'react'
import { Icon } from '../../../../config/icon'
import { config } from '../../../../config/siteConfig'
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import { postFeedbak } from '@/app/action';

interface IDialog {
  image: string
  name: string
  clearScreenshot: () => void
}

const Feedbacks = () => {
  const ref = useRef<HTMLFormElement>(null)

  const [selectedType, setSelectedType] = useState<string>('');
  const [screenShoot, setScreenShoot] = useState('')
  const handleButtonClick = (title: string) => {
    setSelectedType(title);
  };

  const takeScreenshot = async () => {

    try {
      const canvas = await html2canvas(document.body);
      const screenshotDataUrl = canvas.toDataURL();

      setScreenShoot(screenshotDataUrl)
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };
  const clearScreenshot = () => {
    setScreenShoot('')
  };

  async function handlePostFeedback(formData: FormData) {
    const result = await postFeedbak(formData)
    if (result?.error) {

      toast(result.error)
    } else {
      toast('Agradecemos o feedback')
      ref.current?.reset()
      setScreenShoot('')
      setSelectedType('')

    }
  }
  return (
    <form className='space-y-10' action={handlePostFeedback} ref={ref}>
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
      <div className="grid gap-2">
        <Textarea name='message' className='bg-slate-600 border-none' placeholder="A tua messagem" />
        <div className="flex-between gap-3 relative">
          <Button type='submit' className="primary w-full disabled:bg-indigo-300">Enviar</Button>
          {screenShoot ? (
            <>
              <ImagePreview name='imageUrl' clearScreenshot={clearScreenshot} image={screenShoot} />
              <input type="text" name='imageUrl' className='absolute w-0 p-0 h-0' value={screenShoot} readOnly />
            </>
          ) : (
            <Button type='button' className="primary w-16 p-0" onClick={takeScreenshot}>
              <Icon.camera width={50} className="w-4" />
            </Button>
          )}
        </div>
      </div>

    </form>
  )
}
const ImagePreview = ({ image, clearScreenshot, }: IDialog) => {

  return (
    <AlertDialog>
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
