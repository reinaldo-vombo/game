import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
   return (
      <div>
         <Input type="email" className="bg-transparent border-0 border-b-2 border-gray-500 px-6 py-8 focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="Email" />
         <Input type="email" className="bg-transparent border-0 border-b-2 border-gray-500 px-6 py-8 focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="Email" />
         <Select>
            <SelectTrigger className="w-full border-0 border-b-2 border-gray-500 px-6 py-8">
               <SelectValue className="placeholder-slate-700" placeholder="Individo" />
            </SelectTrigger>
            <SelectContent className='bg-black'>
               <SelectItem value='Empresa'>Empresa</SelectItem>
               <SelectItem value='Pessoa'>Pessoa</SelectItem>
            </SelectContent>
         </Select>
         <Select>
            <SelectTrigger className="w-full border-0 border-b-2 border-gray-500 px-6 py-8">
               <SelectValue placeholder="Interesado em..." />
            </SelectTrigger>
            <SelectContent className='bg-black'>
               <SelectItem value='Empresa'>Empresa</SelectItem>
               <SelectItem value='Pessoa'>Pessoa</SelectItem>
            </SelectContent>
         </Select>
         <Textarea className='bg-transparent border-none focus-visible:ring-offset-0 focus-visible:ring-0' placeholder="Type your message here." />
      </div>
   )
}

export default Contact
