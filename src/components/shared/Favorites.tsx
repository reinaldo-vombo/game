import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { config } from "../../../config/siteConfig"
import Link from "next/link"

const Favorites = () => {
   return (
      <Drawer>
         <DrawerTrigger asChild>
            <Button className="secondary rounded-2xl flex items-center justify-center w-14 h-14" >
               <Image src='/heart.gif' width={40} height={40} alt='icon' />
            </Button>
         </DrawerTrigger>
         <DrawerContent className="bg-black">
            <div className="container w-full">
               <DrawerHeader>
                  <DrawerTitle>Seus Favoritos</DrawerTitle>
               </DrawerHeader>
               <div className="grid grid-cols-12 gap-3">
                  {config.GAMES.map((item, i) => (
                     <div className="col-span-3" key={i}>
                        <Link href={`/product/${item.slug}`}>
                           <Image src={item.poster} className="w-56 h-60 object-cover" width={700} height={700} alt={item.title} />
                        </Link>
                     </div>
                  ))}
               </div>
               <DrawerFooter>
                  <DrawerClose asChild>
                     <Button variant="outline">Cancel</Button>
                  </DrawerClose>
               </DrawerFooter>
            </div>
         </DrawerContent>
      </Drawer>
   )
}

export default Favorites
