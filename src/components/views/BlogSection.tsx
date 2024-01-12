'use client'
import { useQuery } from '@tanstack/react-query'
import BlogPostCard from '../shared/BlogPostCard'
import { fetchBlogs } from '@/app/action'
import { IBlogs } from '@/interface/blogs'
interface IBlogProps {
   blogData: IBlogs[]
}

const BlogSection = ({ blogData }: IBlogProps) => {
   const { data, error, isPending } = useQuery({
      queryKey: [`blog`, blogData],
      queryFn: () => fetchBlogs(),
      initialData: blogData
   })


   if (error) {
      return <p>{error.message}</p>
   }
   if (data) {
      return (
         <section className='space-y-10'>
            <h2 className='h2-bold'>As notícias mais recentes da Gamestore Blog </h2>
            <div className='grid grid-cols-12 gap-5'>
               {data.map((post) => (
                  <BlogPostCard
                     key={post._id}
                     title={post.title}
                     descrition={post.descrition}
                     image={post.cover_image}
                     slug={post.slug}
                  />
               ))}
            </div>
         </section>
      )

   }
   if (isPending) {
      return <p>Loading...</p>; // You might want to show a loading indicator
   }

   // Handle the case when there is no error, data, or pending state
   return null;
}

export default BlogSection
