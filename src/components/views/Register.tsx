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
import { useRef, useState } from "react"
import { Icon } from "../../../config/icon"
import SubmitButton from "../shared/form/SubmitButton"



const Register = () => {
   const ref = useRef<HTMLFormElement>(null)
   const [isLoading, setIsLoading] = useState(false)
   const cookies = useCookies();

   async function RegisterAction(formData: FormData) {
      setIsLoading(true)
      const result = await register(formData)
      if (result?.error) {

         setIsLoading(false)
         toast(result?.error)
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
         toast(result?.error)
         ref.current?.reset()
      } else {
         toast('Bem vindo de volta jogador')
         ref.current?.reset()
         setIsLoading(false)
         // cookies.set('user', result.user)
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
               <form action={LogninAction} ref={ref}>
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
                     <SubmitButton />
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
               <form action={RegisterAction} ref={ref}>
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
                     <SubmitButton />
                  </CardFooter>
               </form>
            </Card>
         </TabsContent>
      </Tabs>
   )
}

export default Register
