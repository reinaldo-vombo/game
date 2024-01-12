'use client'
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuIndicator,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const DropdwonNenu = () => {
   return (
      <NavigationMenu>
         <NavigationMenuList>
            <NavigationMenuItem>
               <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
               <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
               </NavigationMenuContent>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
   )
}

export default DropdwonNenu
