import { IPageParams } from '@/interface/product'
import { ImageResponse } from 'next/og'
import React from 'react'
import { config } from '../../../../config/siteConfig'

export const contentType = 'image/png'
export const runtime = 'edge'
export const size = {
   width: 1200,
   height: 630,
}
export default async function Image({ params }: IPageParams) {
   const post = config.GAMES.find(item => item.slug === params.slug)
   return new ImageResponse(
      (
         // ImageResponse JSX element
         <div tw='relative flex w-full flex items-center justify-center'>
            <div tw='absolute flex inset-o'>
               <img src={post?.image} alt={post?.title} />
               <div tw='absolute flex inset-0 bg-black bg-opacity-50 z-10' />
            </div>
            <div tw='flex flex-col text-neutral-50'>
               <div className='text-2xl font-bold'>{post?.title}</div>
            </div>
         </div>
      ),
      // ImageResponse options
      {
         // For convenience, we can re-use the exported opengraph-image
         // size config to also set the ImageResponse's width and height.
         ...size,
         //   fonts: [
         //     {
         //       name: 'Inter',
         //       data: await interSemiBold,
         //       style: 'normal',
         //       weight: 400,
         //     },
         //   ],
      }
   )
}
