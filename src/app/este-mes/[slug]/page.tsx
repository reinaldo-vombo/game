import { IPageParams } from "@/interface/product";
import { config } from "../../../../config/siteConfig";
import Skeleton from "@/components/shared/Skeleton";
import NewsSection from "@/components/views/NewsSection";

export default function page({ params }: IPageParams) {
   const news = config.NEWGAMES.find(item => item.slug === params.slug)

   if (!news) {
      return <Skeleton />
   }
   return (
      <>
         <NewsSection post={news} />
      </>
   )
}