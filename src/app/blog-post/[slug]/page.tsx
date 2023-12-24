import SigleBlog from "@/components/views/SigleBlog";
import { IPageParams } from "@/interface/product";
import { config } from "../../../../config/siteConfig";
import Skeleton from "@/components/shared/Skeleton";

export default function page({ params }: IPageParams) {
   const post = config.BLOGS.find(item => item.slug === params.slug)
   if (!post) {
      return <Skeleton />
   }
   return (
      <>
         <SigleBlog post={post} />
      </>
   )
}