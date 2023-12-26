import Image from 'next/image'
import Replay from './form/Replay'
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '../ui/button'
import { config } from '../../../config/siteConfig'

const Comment = () => {
   return (
      <div>
         <UserComment />
         <div className="ml-12 mt-4 space-y-2">
            <UserComment />
         </div>
         <div className="mt-4">
            <Replay />
         </div>
      </div>
   )
}
const UserComment = () => {
   return (
      <div className="flex items-start gap-2.5">
         <Image className="w-8 h-8 rounded-full" width={500} height={500} src="/avatar.jpg" alt="Jese image" />
         <div className="flex flex-col gap-1 w-full md:max-w-[320px]">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
               <span className="text-sm font-semibold text-gray-400 dark:text-white">Bonnie Green</span>
               <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
            </div>
            <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-slate-700 rounded-e-xl rounded-es-xl dark:bg-gray-700">
               <p className="text-sm font-normal text-gray-300 dark:text-white">That awesome. I think our users will really appreciate the improvements.</p>
            </div>
            <div className='flex items-center ml-3 gap-4 md:gap-8'>
               <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11 h</span>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger className='text-slate-500 font-semibold outline-none text-xs md:text-base'>Gosto</TooltipTrigger>
                     <TooltipContent className='bg-white'>
                        {config.EMOJES.map((item, i) => (
                           <Button aria-label='emoji' key={i}>
                              <Image src={item.icon} width={40} height={400} alt='' />
                           </Button>
                        ))}
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
               <button className='text-slate-500 font-semibold text-xs md:text-base'>Responder</button>
            </div>
         </div>

      </div>
   )
}
export default Comment
