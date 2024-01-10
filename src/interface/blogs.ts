import { TypedObject } from "sanity"

export interface IBlogs {
   _id: string
   title: string
   descrition: string
   cover_image: string
   slug: string
   content: TypedObject | TypedObject[]
}
export interface IAllComments {
   _id: string
   text: string
   postedBy: { name: string, image: string }
}