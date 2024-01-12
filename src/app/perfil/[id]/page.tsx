import { IPageParams } from "@/interface/product"

import ProfileSection from "@/components/views/ProfileSection"
import { getUser } from "@/app/action"

const page = async ({ params }: IPageParams) => {
   const user = await getUser()

   return (
      <ProfileSection user={user} />
   )
}

export default page
