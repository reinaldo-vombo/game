export interface IBlogs {
   _id: string
   title: string
   descrition: string
   cover_image: string
   slug: string
   content: [{
      markDefs: []
      children: [{
         _type:string
         style:string
         _key:string
      }]
   }]
}