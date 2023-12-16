
import React from 'react'
import { config } from '../../../../config/siteConfig'
import Skeleton from '@/components/shared/Skeleton'
import ProductInfo from '@/components/shared/ProductInfo'
interface IPageParams {
   params: {
      slug: string
   }
}
export default function page({ params }: IPageParams) {
   const product = config.GAMES.find(item => item.slug === params.slug)

   if (!product) {
      return <Skeleton />
   }
   return (
      <>
         <ProductInfo product={product} />
      </>
   )
}
