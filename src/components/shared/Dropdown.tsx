import { ReactElement, ReactNode } from "react"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
interface IDropdown {
   children: ReactNode
   className: string
   image: ReactElement
}

const Dropdown = ({ children, image, className }: IDropdown) => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger aria-label="image icon" className={`fixed z-10 primary  rounded-full ${className}`}>
            {image}
         </DropdownMenuTrigger>
         <DropdownMenuContent className='bg-black p-2 w-72 border-slate-700'>
            {children}
         </DropdownMenuContent>
      </DropdownMenu>
   )
}

export default Dropdown
