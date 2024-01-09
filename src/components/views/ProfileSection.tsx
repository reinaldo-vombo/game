'use client'
import {
   AlertDialog,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogFooter,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Icon } from "../../../config/icon"
import Image from "next/image"
import { ReactNode } from "react"
import FileUploader from "../shared/FileUploader"
import { useProvider } from "@/context/Provider"
import Skeleton from "../shared/Skeleton"
interface IEditor {
   children: ReactNode
   className: string
}

const ProfileSection = () => {
   const { user } = useProvider()
   if (!user) {
      return <Skeleton />
   }
   return (
      <>
         <div className="h-64 relative rounded-md bg-cover bg-center flex" style={{ backgroundImage: `url(/category-banner.webp)` }}>
            <div className="absolute bottom-[-46px] left-9 flex items-center gap-4">
               <Image src={user.image} className="w-32 h-32 rounded-full border border-black" width={400} height={400} alt={user.name} />
               <b>{user.name}</b>
               <EditPhoto className="absolute right-[142px] top-[91px]">
                  <FileUploader />
               </EditPhoto>
            </div>
            <div>
               <EditPhoto className="absolute top-0 right-0 p-4">
                  background photo
               </EditPhoto>
            </div>
         </div>
         <div className="grid grid-cols-12 gap-4 mt-16">
            <div className="col-span-4 bg-slate-800 rounded-md p-3 space-y-6">
               <h2 className="h2-bold">Tuas Notifições</h2>
               <div className="flex flex-col items-center justify-center">
                  <p>Ésta função ésta em desevolvimento</p>
                  <Image src='/build.gif' className="w-24 h-24" width={400} height={400} alt="tool" />
               </div>
            </div>
            <div className="col-span-8 bg-slate-800 rounded-md p-3 space-y-5">
               <h2 className="h2-bold">Seu Favoritos</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="grid gap-4">
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                     </div>
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                     </div>
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                     </div>
                  </div>
                  <div className="grid gap-4">
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                     </div>
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                     </div>
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                     </div>
                  </div>
                  <div className="grid gap-4">
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                     </div>
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                     </div>
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                     </div>
                  </div>
                  <div className="grid gap-4">
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                     </div>
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                     </div>
                     <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   )
}
const EditPhoto = ({ children, className }: IEditor) => {
   return (
      <AlertDialog>
         <AlertDialogTrigger className={className}>
            <Icon.pencil width={20} />
         </AlertDialogTrigger>
         <AlertDialogContent className="bg-black border-slate-700">
            <div>
               {children}
            </div>
            <AlertDialogFooter>
               <AlertDialogCancel className="border-slate-700 hover:primary">Cancel</AlertDialogCancel>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>

   )
}
export default ProfileSection
