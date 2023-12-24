import Image from 'next/image'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { Icon } from '../../../../config/icon'
import { toast } from "sonner"

const Replay = () => {
   const hanleReply = () => {
      toast('Esta funcionalidade não está disponivel')
   }

   return (
      <>
         <form >
            <div className="flex space-x-4">
               <div className="flex-shrink-0">
                  <Image src='/ps.webp' width={400} height={400} alt="User Avatar" className="w-8 h-8 rounded-full" />
               </div>
               <div className="flex-1 relative">
                  <Textarea className='bg-slate-600 border-none' placeholder="Type your message here." />
                  <div className='absolute bottom-0 right-0 flex items-center justify-between'>
                     <div className='flex'>
                        <Button type="submit" className="hover:bg-[##ffffff17] rounded-md">
                           <Icon.gif width={20} className='text-[#2993FA]' />
                        </Button>
                        <Button type="submit" className="hover:bg-[##ffffff17] rounded-md">
                           <Icon.emoj width={20} className='text-[#2993FA]' />
                        </Button>
                        <Button type="submit" className="hover:bg-[##ffffff17] rounded-md">
                           <Icon.camera width={20} className='text-[#2993FA]' />
                        </Button>
                     </div>
                     <Button type="button" className="px-4 py-2" onClick={hanleReply}>
                        <Icon.send width={20} className='text-[#2993FA]' />
                     </Button>
                  </div>
               </div>
            </div>
         </form>

      </>
   )
}

export default Replay
