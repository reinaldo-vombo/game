import BlogSection from "@/components/views/BlogSection";
import Hero from "@/components/views/Hero";
import NewProducts from "@/components/views/NewProducts";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <NewProducts />
      <BlogSection />
    </div>
  )
}
