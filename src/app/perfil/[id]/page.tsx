import { IPageParams } from "@/interface/product"
import { config } from "../../../../config/siteConfig"
import Skeleton from "@/components/shared/Skeleton"

import ProfileSection from "@/components/views/ProfileSection"

const page = ({ params }: IPageParams) => {
   const user = config.USERS.find(item => item._id === params.id)
   if (!user) {
      return <Skeleton />
   }
   return (
      <ProfileSection user={user} />
   )
}

export default page
