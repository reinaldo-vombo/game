import React from 'react'
import { config } from '../../../config/siteConfig'
import BlogPostCard from '../shared/BlogPostCard'
interface IBlogProps {
   data: {
      _id: string
      slug: string
      title: string
      image: string
      descrition: string
   }[]
}

const BlogSection = ({ data }: IBlogProps) => {

   return (
      <section className='space-y-10'>
         <h2 className='h2-bold'>As notícias mais recentes da Gamestore Blog </h2>
         <div className='grid grid-cols-12 gap-5'>
            {data.map((post) => (
               <BlogPostCard
                  key={post._id}
                  title={post.title}
                  descrition={post.descrition}
                  image={post.image}
                  slug={post.slug}
               />
            ))}
         </div>
      </section>
   )
}

export default BlogSection
