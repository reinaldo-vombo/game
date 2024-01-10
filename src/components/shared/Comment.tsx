import Image from 'next/image'
import { toast } from "sonner"
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '../ui/button'
import { config } from '../../../config/siteConfig'
import { Textarea } from '../ui/textarea'
import { Icon } from '../../../config/icon'
import { postComment } from '@/app/action'
import { revalidatePath } from 'next/cache'
import { IAllComments } from '@/interface/blogs'
import { useProvider } from '@/context/Provider'
interface IComment {
   comments: IAllComments[]
   blogId: string
}
interface IPoster {
   name: string
   reply: string
}
const Comment = ({ blogId, comments }: IComment) => {
   const { user } = useProvider()


   async function hanleReply(formData: FormData) {
      const result = await postComment(formData)
      if (result?.error) {
         toast(result.error)
      } else {
         revalidatePath('/blog-post/[slug]', 'page');
         toast('eviada')
      }
   }

   return (
      <div>
         {comments.map((item) => (
            <UserComment name={item.postedBy.name} reply={item.text} key={item._id} />
         ))}
         {/* <div className="ml-12 mt-4 space-y-2">
            <UserComment />
         </div> */}
         <div className="mt-4">
            <form action={hanleReply}>
               <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                     <Image src={user ? user.image : ''} width={400} height={400} alt="User Avatar" className="w-8 h-8 rounded-full" />
                  </div>
                  <div className="flex-1 relative">
                     <Textarea name='comment' id='comment' className='bg-slate-600 border-none focus-visible:ring-offset-0 focus-visible:ring-0' placeholder="Type your message here." />
                     <input className='absolute w-0 h-0' name='blogId' type="text" value={blogId} />
                     <div className='absolute bottom-0 right-0 flex items-center justify-between'>
                        <div className='flex'>
                           <Button type="button" className="hover:bg-[##ffffff17] rounded-md">
                              <Icon.gif width={20} className='text-[#2993FA]' />
                           </Button>
                           <Button type="button" className="hover:bg-[##ffffff17] rounded-md">
                              <Icon.emoj width={20} className='text-[#2993FA]' />
                           </Button>
                        </div>
                        <Button type="submit" className="px-4 py-2">
                           <Icon.send width={20} className='text-[#2993FA]' />
                        </Button>
                     </div>
                  </div>
               </div>
            </form>

         </div>
      </div>
   )
}
const UserComment = ({ name, reply }: IPoster) => {
   return (
      <div className="flex items-start gap-2.5 mb-4">
         <Image className="w-8 h-8 rounded-full" width={500} height={500} src="/avatar.jpg" alt="Jese image" />
         <div className="flex flex-col gap-1 w-full md:max-w-[320px]">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
               <span className="text-sm font-semibold text-gray-400 dark:text-white">{name}</span>
               <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
            </div>
            <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-slate-700 rounded-e-xl rounded-es-xl dark:bg-gray-700">
               <p className="text-sm font-normal text-gray-300 dark:text-white">{reply}</p>
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
