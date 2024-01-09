'use client'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
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
import { lognin, register } from "@/app/action"
import { useCookies } from 'next-client-cookies';
import { useState } from "react"
import { Icon } from "../../../config/icon"


const Register = () => {
   const [isLoading, setIsLoading] = useState(false)
   const cookies = useCookies();

   // function isValidEmail(email: string | null) {
   //    if (!email) {
   //       return false; // Return false for null or undefined
   //    }
   //    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   //    return emailRegex.test(email);
   // }
   async function RegisterAction(formData: FormData) {

      // if (!isValidEmail(email)) {
      //    setIsLoading(false);
      //    toast('Por favor, insira um endereço de e-mail válido');
      //    return;
      // }

      setIsLoading(true)
      const result = await register(formData)
      if (result?.error) {

         setIsLoading(false)
         toast('Ocorreu um erro, por-favor tente de novo')
      } else {
         toast('Bem vindo jogador')
         setIsLoading(false)
      }
   }
   async function LogninAction(formData: FormData) {
      setIsLoading(true)
      const result = await lognin(formData)
      if (result?.error) {

         setIsLoading(false)
         toast('Ocorreu um erro, por-favor tente de novo')
      } else {
         toast('Bem vindo de volta jogador')
         setIsLoading(false)
         cookies.set('user', result.user)
         console.log(result.user);

      }

   }
   return (
      <Tabs defaultValue="signin" className="w-[400px]">
         <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Entar</TabsTrigger>
            <TabsTrigger value="signout">Registar-se</TabsTrigger>
         </TabsList>
         <TabsContent value="signin">
            <Card className="border-slate-700">
               <CardHeader>
                  <CardTitle>Entrar</CardTitle>
                  <CardDescription>
                     Make changes to your account here. Click save when youre done.
                  </CardDescription>
               </CardHeader>
               <form action={LogninAction}>
                  <CardContent className="space-y-2">
                     <div className="space-y-1">
                        <label htmlFor="email">Email</label>
                        <Input name="email" type="email" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" />
                     </div>
                     <div className="space-y-1">
                        <label htmlFor="username">Password</label>
                        <Input name="password" type="password" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" />
                     </div>
                  </CardContent>
                  <CardFooter>
                     <Button type="submit" className="w-full primary">Entar</Button>
                  </CardFooter>
               </form>
            </Card>
         </TabsContent>
         <TabsContent value="signout">
            <Card className="border-slate-700">
               <CardHeader>
                  <CardTitle>Cadastra-se</CardTitle>
                  <CardDescription>
                     Change your password here. After saving, youll be logged out.
                  </CardDescription>
               </CardHeader>
               <form action={RegisterAction}>
                  <CardContent className="space-y-2">
                     <div className="space-y-1">
                        <label htmlFor="current">Nome</label>
                        <Input name="name" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" type="text" />
                     </div>
                     <div className="space-y-1">
                        <label htmlFor="new">Email</label>
                        <Input name="email" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" type="email" />
                     </div>
                     <div className="space-y-1">
                        <label htmlFor="new">Palavra-passe</label>
                        <Input name="password" className="bg-slate-700 focus-visible:ring-offset-0 border-slate-800" type="password" />
                     </div>
                  </CardContent>
                  <CardFooter>
                     <Button type="submit" className="w-full primary flex justify-center disabled:bg-indigo-600" disabled={isLoading}>
                        {isLoading ? <Icon.loader className="ani" width={20} /> : 'Cadastra-se'}
                     </Button>
                  </CardFooter>
               </form>
            </Card>
         </TabsContent>
      </Tabs>
   )
}

export default Register
