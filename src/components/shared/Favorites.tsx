import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Favorites = () => {
   return (
      <Drawer>
         <DrawerTrigger asChild>
            <Button className="secondary rounded-2xl flex items-center justify-center w-14 h-14" >
               <Image src='/heart.gif' width={40} height={40} alt='icon' />
            </Button>
         </DrawerTrigger>
         <DrawerContent className="bg-black">
            <div className="mx-auto w-full max-w-sm">
               <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
               </DrawerHeader>

               <DrawerFooter>
                  <Button>Submit</Button>
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
