import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { Button } from "../ui/button"
import { Icon } from "../../../config/icon"
import Feedbacks from "./form/Feedbacks"

const Feedback = () => {
   return (
      <div>
         <DropdownMenu>
            <DropdownMenuTrigger className='fixed z-10 primary right-0 bottom-0 gap-6 w-14 h-14 rounded-full'>
               <Image src='/elipse.gif' className='absolute z-10 m-auto inset-0 object-cover' width={40} height={40} alt='icon' />

            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-black p-2 w-72'>
               <h2 className="text-center">Portal de feedbacks</h2>
               <Separator orientation="vertical" />
               <Feedbacks />
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}

export default Feedback
