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

const isLoggin = false
const BottomNav = () => {
   return (
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 sm:hidden">
         <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <div className="flex items-center justify-center">
               <Button >
                  <Image src='/icons/home.gif' className=" w-full h-full" width={400} height={400} alt="icon" />
               </Button>
            </div>
            <MobileItems />
            <div className="flex items-center justify-center relative">
               <Dropdown className="w-[2.75rem] h-[2.75rem]" image={<Image src='/elipse.gif' className='absolute z-10 m-auto inset-0 object-cover' width={40} height={40} alt='icon' />}>
                  <h2 className="text-center">Portal de feedbacks</h2>
                  <Separator className="my-4 bg-slate-700" />
                  <Feedbacks />
               </Dropdown>
            </div>
            <div className="flex items-center justify-center">
               <ModalDialog
                  className="w-[1.75rem] h-[2.75rem]"
                  image={<Image src='/icons/search.gif' width={400} height={400} alt="icon" />}
               >
                  <InputField />
               </ModalDialog>
            </div>
            {isLoggin ? (
               <DropdownMenu>
                  <DropdownMenuTrigger className='flex-center relative rounded-full'>
                     <Image src={user.avatar} className='rounded-full w-[2.75rem] h-[2.75rem] object-cover' width={40} height={40} alt='icon' />
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
            ) : (
               <ModalDialog
                  className='flex-center gap-6 relative w-14 h-14 p-0'
                  image={<Image src='/icons/account.gif' className='rounded-full object-cover' width={40} height={40} alt='icon' />}
               >
                  <Register />
               </ModalDialog>
            )}
         </div>
      </div>

   )
}

export default BottomNav
