
import { config } from '../../../../config/siteConfig'
import Skeleton from '@/components/shared/Skeleton'
import ProductInfo from '@/components/shared/ProductInfo'
import Link from 'next/link'
import { Icon } from '../../../../config/icon'
import { IPageParams } from '@/interface/product'
import { Metadata, ResolvingMetadata } from 'next'
import { fetchProducts, singleProduct } from '@/app/action'
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
   const product = await singleProduct(`${params.slug}`)

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

export default async function page({ params }: IPageParams) {
   const product = await singleProduct(`${params.slug}`)
   const category = product.category[0].title;


   const relatedproducts = await fetchProducts(`${category}`)

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
         <ProductInfo relatedproducts={relatedproducts} product={product} />
      </>
   )
}
