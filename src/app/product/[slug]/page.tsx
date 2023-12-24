
import { config } from '../../../../config/siteConfig'
import Skeleton from '@/components/shared/Skeleton'
import ProductInfo from '@/components/shared/ProductInfo'
import Link from 'next/link'
import { Icon } from '../../../../config/icon'
import { IPageParams } from '@/interface/product'

export default function page({ params }: IPageParams) {
   const product = config.GAMES.find(item => item.slug === params.slug)

   if (!product) {
      return <Skeleton />
   }
   return (
      <>
         <div className='fixed bg-black w-full h-[2.5rem] z-20 text-white px-10'>
            <Link href='/' className='flex items-center'>
               <Icon.home width={20} />
               <b>Home</b>
            </Link>
         </div>
         <ProductInfo product={product} />
      </>
   )
}
