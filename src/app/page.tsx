import BlogSection from "@/components/views/BlogSection";
import Hero from "@/components/views/Hero";
import NewProducts from "@/components/views/NewProducts";
import { config } from "../../config/siteConfig";
import Follow from "@/components/views/Follow";
import Main from "@/components/shared/Main";

export default function Home() {

  return (
    <Main>
      <div className="relative space-y-10">
        <Hero />
        <NewProducts />
        <BlogSection data={config.BLOGS} />
        <Follow />
      </div>
    </Main>
  )
}
