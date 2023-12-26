
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs"
import Button from "../Button"


const Register = () => {
   return (
      <div className="col-span-7 flex-center text-black">
         <Tabs defaultValue="Entar" className="w-[400px] border-none">
            <TabsList className="flex flex-col absolute right-[58%] top-1/2">
               <TabsTrigger className="bg-white text-black w-24" value="Entar">Entar</TabsTrigger>
               <TabsTrigger className="bg-white text-black w-24" value="Cadastrar">Cadastrar</TabsTrigger>
            </TabsList>
            <TabsContent value="Entar">
               <Card className="border-none">
                  <CardHeader>
                     <CardTitle>Entar</CardTitle>
                     <CardDescription>
                        Make changes to your account here. Click save when youre done.
                     </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                     <div className="space-y-1">
                        <label htmlFor="name">Name</label>
                        <Input id="name" className="focus-visible:ring-offset-0" defaultValue="Pedro Duarte" />
                     </div>
                     <div className="space-y-1">
                        <label htmlFor="username">Username</label>
                        <Input id="username" className="focus-visible:ring-offset-0" defaultValue="@peduarte" />
                     </div>
                  </CardContent>
                  <CardFooter>
                     <Button className="">Entart</Button>
                  </CardFooter>
               </Card>
            </TabsContent>
            <TabsContent value="Cadastrar">
               <Card className="border-none">
                  <CardHeader>
                     <CardTitle>Cadastra-se</CardTitle>
                     <CardDescription>
                        Change your password here. After saving, youll be logged out.
                     </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                     <div className="space-y-1">
                        <label htmlFor="current">Nome</label>
                        <Input id="current" className="focus-visible:ring-offset-0" type="text" />
                     </div>
                     <div className="space-y-1">
                        <label htmlFor="new">Email</label>
                        <Input id="new" className="focus-visible:ring-offset-0" type="email" />
                     </div>
                     <div className="space-y-1">
                        <label htmlFor="new">Password</label>
                        <Input id="new" className="focus-visible:ring-offset-0" type="password" />
                     </div>
                  </CardContent>
                  <CardFooter>
                     <Button>Cadastrar-se</Button>
                  </CardFooter>
               </Card>
            </TabsContent>
         </Tabs>
      </div>

   )
}

export default Register
