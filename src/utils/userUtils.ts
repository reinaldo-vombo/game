import { getUser } from "@/app/action"

export const currentUser = async () => {
   const user = await getUser()
   
   return user
}
