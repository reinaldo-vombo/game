import { Progress } from "@/components/ui/progress"
import { Icon } from '../../../config/icon'
import Image from 'next/image'

const Dwonload = () => {
   return (
      <div className='absolute w-[91%] bottom-2'>
         <div className='flex-center'>
            <Icon.chevronUp width={20} />
         </div>
         <div className='rounded-md shadow-lg shadow-black flex items-center gap-2 p-3 bg-[#2a4258] w-full'>
            <Image src='/cb-post.jpg' className='h-full w-10 object-cover' width={400} height={400} alt='game' />
            <div className="w-full">
               <h2>CyberPunk 2077</h2>
               <Progress value={33} className="w-full h-[.5rem]" />
               <span>Baixando</span>
            </div>
         </div>
      </div>
   )
}

export default Dwonload
