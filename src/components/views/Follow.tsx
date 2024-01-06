import Image from "next/image"
import Link from "next/link"
const media = [
   { icon: '/twitterx.svg', route: '#', name: 'twitter', },
   { icon: '/instagram.svg', route: '#', name: 'instagram', },
   { icon: '/facebook.svg', route: '#', name: 'facebook', },
]

const Follow = () => {
   return (
      <section className='relative h-[60vh] rounded-lg overlay'>
         <Image src='/follow-us.png' className="w-full h-full object-cover rounded-lg" width={900} height={900} alt="demo image" />
         <div className="absolute m-auto inset-0 w-full md:w-[75%] text-white space-y-6">
            <h2 className="text-center text-white h3-bold">Segue-nos nas redes sociais</h2>
            <div className="flex-between">
               {media.map((item, i) => (
                  <Link href={item.route} className="link-hover" aria-label="social media icon" key={i}>
                     <Image src={item.icon} width={50} height={50} loading="lazy" alt={item.name} />
                  </Link>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Follow
