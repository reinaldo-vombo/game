import SigleBlog from "@/components/views/SigleBlog";
import { IPageParams } from "@/interface/product";
import Skeleton from "@/components/shared/Skeleton";
import { fetchSigleBlog, fetchComments, fetchBlogs } from "@/app/action";
import { Metadata, ResolvingMetadata } from "next";

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
   const post = await fetchSigleBlog(`${params.slug}`)

   if (!post) {
      return {
         title: 'Não Encontado',
         description: 'A pagina solicitada não foi econtrada'
      }
   }
   // optionally access and extend (rather than replace) parent metadata
   const previousImages = (await parent).openGraph?.images || []
   const imageUrl = post ? post.cover_image : ''

   return {
      title: post.title,
      description: post.descrition,
      alternates: {
         canonical: `/${post?.slug}`
      },
      openGraph: {
         images: [imageUrl, ...previousImages],
      },
   }
}

export default async function page({ params }: IPageParams) {
   const post = await fetchSigleBlog(`${params.slug}`)
   const allPost = await fetchBlogs()

   if (!post) {
      return <Skeleton />
   }
   return (
      <>
         <SigleBlog post={post} allPost={allPost} />

      </>
   )
}