import { Button } from "@/components/ui/button"
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

const Register = () => {
   return (
      <Tabs defaultValue="account" className="w-[400px]">
         <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
         </TabsList>
         <TabsContent value="account">
            <Card className="border-slate-700">
               <CardHeader>
                  <CardTitle>Entrar</CardTitle>
                  <CardDescription>
                     Make changes to your account here. Click save when youre done.
                  </CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                  <div className="space-y-1">
                     <label htmlFor="name">Email</label>
                     <Input id="name" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                     <label htmlFor="username">Password</label>
                     <Input id="username" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" defaultValue="@peduarte" />
                  </div>
               </CardContent>
               <CardFooter>
                  <Button className="w-full primary">Entar</Button>
               </CardFooter>
            </Card>
         </TabsContent>
         <TabsContent value="password">
            <Card className="border-slate-700">
               <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                     Change your password here. After saving, youll be logged out.
                  </CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                  <div className="space-y-1">
                     <label htmlFor="current">Nome</label>
                     <Input id="current" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" type="password" />
                  </div>
                  <div className="space-y-1">
                     <label htmlFor="new">Email</label>
                     <Input id="new" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" type="password" />
                  </div>
                  <div className="space-y-1">
                     <label htmlFor="new">Palavra-passe</label>
                     <Input id="new" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" type="password" />
                  </div>
               </CardContent>
               <CardFooter>
                  <Button className="w-full primary">Cadastra-se</Button>
               </CardFooter>
            </Card>
         </TabsContent>
      </Tabs>
   )
}

export default Register
