import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Feedbacks from "./form/Feedbacks"

const Feedback = () => {
   return (
      <div>
         <DropdownMenu>
            <DropdownMenuTrigger className='fixed z-10 primary right-0 bottom-0 gap-6 w-14 h-14 rounded-full'>
               <Image src='/elipse.gif' className='absolute z-10 m-auto inset-0 object-cover' width={40} height={40} alt='icon' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-black p-2 w-72 border-slate-700'>
               <h2 className="text-center">Portal de feedbacks</h2>
               <Separator className="my-4 bg-slate-700" />
               <Feedbacks />
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}

export default Feedback
