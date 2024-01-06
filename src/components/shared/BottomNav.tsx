'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { user } from "../../../config/siteConfig"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Dropdown from "./Dropdown"
import Feedbacks from "./form/Feedbacks"
import MobileItems from "./MobileItems"
import InputField from "./InputField"
import ModalDialog from "./ModalDialog"
import Register from "../views/Register"
import { use } from "react"

const isLoggin = true
const BottomNav = () => {
   return (
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 sm:hidden">
         <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <div className="flex items-center justify-center">
               <Button className="relative w-10 h-10 py-0" aria-label="home icon button">
                  <Image src='/icons/home.gif' fill sizes='100%' loading="lazy" alt="home icon" />
               </Button>
            </div>
            <MobileItems />
            <div className="flex items-center justify-center relative">
               <Dropdown className="relative w-12 h-12 py-0" image={<Image src='/elipse.gif' fill sizes='100%' loading="lazy" alt='icon' />}>
                  <h2 className="text-center">Portal de feedbacks</h2>
                  <Separator className="my-4 bg-slate-700" />
                  <Feedbacks />
               </Dropdown>
            </div>
            <div className="flex items-center justify-center">
               <ModalDialog
                  className="relative w-12 h-12 py-0"
                  image={<Image src='/icons/search.gif' fill sizes='100%' loading="lazy" alt="search icon" />}
               >
                  <InputField />
               </ModalDialog>
            </div>
            {isLoggin ? (
               <div className="flex items-center justify-center">
                  <DropdownMenu>
                     <DropdownMenuTrigger aria-label="image icon" className='flex-center relative w-[2.75rem] h-[2.75rem] rounded-full'>
                        <Image src={user.avatar} className='rounded-full' fill sizes="100%" loading="lazy" alt={use.name} />
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className='bg-black border-slate-700'>
                        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='hover:bg-slate-900 rounded-md'>
                           <Link href={`/perfil/${user._id}`}>Perfil</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </div>
            ) : (
               <div className="flex items-center justify-center">
                  <ModalDialog
                     className='relative w-12 h-12 py-0'
                     image={<Image src='/icons/account.gif' fill loading="lazy" alt='account icon' />}
                  >
                     <Register />
                  </ModalDialog>

               </div>

            )}
         </div>
      </div>

   )
}

export default BottomNav
