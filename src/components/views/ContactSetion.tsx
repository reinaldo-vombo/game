import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import Contact from "../shared/form/Contact"
import { Button } from "../ui/button"
import { Icon } from "../../../config/icon"
import ContactInfo from "../shared/ContactInfo"

const ContactSetion = () => {
   return (
      <div className="container mt-8">
         <div className="flex-center gap-9">
            <Card className="border-slate-700 bg-black w-full md:w-[34%]">
               <CardHeader>
                  <CardTitle className="text-[#2993FA]">Entre Em Contacto</CardTitle>
               </CardHeader>
               <CardContent className="px-0">
                  <Contact />
               </CardContent>
               <CardFooter className="flex items-center justify-end">
                  <Button className="primary rounded-full w-9 h-9 flex-center p-0">
                     <Icon.envelope width={20} />
                  </Button>
               </CardFooter>
            </Card>

            <Card className="border-slate-700 primary w-full md:w-[34%] translate-y-28">
               <CardHeader>
                  <CardTitle>Informações de Contacto</CardTitle>
               </CardHeader>
               <CardContent>
                  <ContactInfo />
               </CardContent>
               <CardFooter className="flex items-center justify-end">

               </CardFooter>
            </Card>

         </div>
      </div>
   )
}

export default ContactSetion
