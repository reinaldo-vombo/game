import BlogSection from "@/components/views/BlogSection";
import Hero from "@/components/views/Hero";
import NewProducts from "@/components/views/NewProducts";
import Follow from "@/components/views/Follow";
import { fetchBlogs } from "../action";

export default async function Home() {
  const blogs = await fetchBlogs()

  return (
    <>
      <div className="relative space-y-10">
        <Hero />
        <NewProducts />
        <BlogSection blogData={blogs} />
        <Follow />
      </div>
    </>
  )
}
