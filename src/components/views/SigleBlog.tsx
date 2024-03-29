
import SubNav from '../shared/SubNav'
import { PortableText } from '@portabletext/react'
import { Icon } from '../../../config/icon'
import Image from 'next/image'
import { config } from '../../../config/siteConfig'
import Link from 'next/link'
import { Button } from '../ui/button'
import Comment from '../shared/Comment'
import { IAllComments, IBlogs } from '@/interface/blogs'
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/lib/image'
import { fetchComments, getUser } from '@/app/action'
import SharedButton from '../shared/SharedButton'
interface IBlogProps {
   post: IBlogs
   allPost: IBlogs[]
}
const MyImageComponent = ({ value, isInline }: any) => {
   const { width, height } = getImageDimensions(value);

   // Build the URL for the image using urlBuilder

   const imageUrl = urlForImage(value)
      .image(value)
      .width(isInline ? 100 : 800)
      .fit('max')
      .auto('format')
      .url();
   return (
      <Image
         src={imageUrl}
         alt={value.alt || ''}
         loading="lazy"
         width={500}
         height={500}
         style={{
            display: isInline ? 'inline-block' : 'block',
            aspectRatio: width / height,
         }}
      />
   );
}
const myPortableTextComponents = {
   types: {
      image: MyImageComponent
   },

   marks: {
      link: ({ children, value }: any) => {
         const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
         return (
            <a href={value.href} rel={rel}>
               {children}
            </a>
         )
      },
   },
}
const SigleBlog = async ({ post, allPost }: IBlogProps) => {
   const allComments: IAllComments[] = await fetchComments(post._id)
   const user = await getUser()
   const numberOfComments = allComments.length

   return (
      <section>
         <div className='h-72 bg-cover bg-center blog-overlay relative md:h-44' style={{ backgroundImage: 'url(/blog-bg.jpg)' }}>
         </div>
         <SubNav user={user} showLinks={false} />
         <div className='px-5 mt-11 space-y-7'>
            <div className='pr-[20%] text-slate-500'>
               <span>December 15, 2023</span>
               <h2 className='text-[25px] font-semibold md:h1-bold'>{post.title}</h2>
               <div>
                  <ul className='flex items-center gap-6'>
                     <li className='flex items-center gap-2'><Icon.chat width={20} />{numberOfComments}</li>
                     {/* <li className='flex items-center gap-2'><Icon.microphone width={20} />{post.audio}</li>
                     <li className='flex items-center gap-2'><Icon.heart width={20} />{post.likes}</li> */}
                  </ul>
               </div>
            </div>
            <div className='grid grid-cols-12 gap-3'>
               <div className='col-span-12 md:col-span-9'>
                  <div className='my-4'>
                     <Image src={post.cover_image} className='h-full w-full object-cover' width={900} height={900} alt='post' />
                  </div>
                  <div className='space-y-6'>
                     <div className='flex-between'>
                        <div className='flex items-center gap-4'>
                           <Image src='/ps.webp' className='rounded-md w-8 h-8' width={500} height={500} alt='user' />
                           <div className='grid'>
                              <span className='text-[#2993FA]'>Reinaldo Vombo</span>
                              <span>Gamestore Blog Correspondent</span>
                           </div>
                        </div>
                        <div className='flex items-center gap-4'>
                           <span>Partilhar:</span>
                           <div className='flex items-center gap-4'>
                              <SharedButton quote={post.title} />
                              {/* <Image src='/facebook.svg' className='rounded-md w-8 h-8' width={500} height={500} alt='user' />
                              <Image src='/instagram.svg' className='rounded-md w-8 h-8' width={500} height={500} alt='user' />
                              <Image src='/heart.gif' className='rounded-md w-8 h-8' width={500} height={500} alt='user' /> */}
                           </div>
                        </div>
                     </div>
                     {/* <h2 className='h1-semibold text-[#2993FA]'>{post.subTitle ? post.subTitle : ''}</h2> */}
                     <PortableText value={post.content} components={myPortableTextComponents} />
                  </div>
               </div>
               <div className='col-span-12 md:col-span-3'>
                  <h3 className='h3-bold mb-6'>Útimas Nòticias</h3>
                  <div className="flex flex-col sm:flex-col justify-center gap-4">
                     {allPost.map((item, i) => (
                        <div key={i}>
                           <Link href={`/blog-post/${item.slug}`} className='group transition-colors'>
                              <Image src={item.cover_image} className='rounded-md w-full ' width={500} height={500} alt='user' />
                              <h2 className='base-medium group-hover:text-[#2993FA]'>{item.title}</h2>
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className='bg-black p-4 mt-6 text-center space-y-5'>
            <h3>Participe da conversa</h3>
            <div>
               <Link href='#comment' className='primary p-2 rounded-md'>Comentar</Link>
            </div>
            <h3 className='text-slate-500'>Mas não seja um idiota!</h3>
            <p>Por favor, seja gentil, atencioso e construtivo. Denunciar comentários inadequados para</p>
         </div>
         <div className='p-1 md:p-8 space-y-6'>
            {/* <h2 className='base-medium'>{post.comment}Comentario</h2> */}
            <Comment blogId={post._id} comments={allComments} user={user} />
         </div>
      </section>
   )
}


export default SigleBlog
