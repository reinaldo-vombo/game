
import { config } from '../../../../config/siteConfig'
import Skeleton from '@/components/shared/Skeleton'
import ProductInfo from '@/components/shared/ProductInfo'
import Link from 'next/link'
import { Icon } from '../../../../config/icon'
import { IPageParams } from '@/interface/product'
import { Metadata, ResolvingMetadata } from 'next'
type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
   { params, searchParams }: Props,
   parent: ResolvingMetadata
): Promise<Metadata> {
   // read route params

   // fetch data
   const product = config.GAMES.find(item => item.slug === params.slug)

   if (!product) {
      return {
         title: 'Não Encontado',
         description: 'A pagina solicitada não foi econtrada'
      }
   }
   // optionally access and extend (rather than replace) parent metadata
   const previousImages = (await parent).openGraph?.images || []
   const imageUrl = product ? product.image : ''

   return {
      title: product.title,
      description: product.desc,
      alternates: {
         canonical: `/${product?.slug}`
      },
      openGraph: {
         images: [imageUrl, ...previousImages],
      },
   }
}

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
