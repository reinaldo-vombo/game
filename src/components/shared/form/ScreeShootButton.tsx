'use client'
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import html2canvas from "html2canvas";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { Icon } from "../../../../config/icon";

interface IDialog {
   image: string
   name: string
   clearScreenshot: () => void
}
interface ISreeshot {
   screenShoot: string
   setScreenShoot: Dispatch<SetStateAction<string>>
}

const ScreeShootButton = ({ screenShoot, setScreenShoot }: ISreeshot) => {


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
   return (
      <>
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
      </>
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
export default ScreeShootButton
