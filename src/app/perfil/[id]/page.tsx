import { IPageParams } from "@/interface/product"
import { config } from "../../../../config/siteConfig"
import Skeleton from "@/components/shared/Skeleton"

import ProfileSection from "@/components/views/ProfileSection"

const page = ({ params }: IPageParams) => {

   return (
      <ProfileSection />
   )
}

export default page
