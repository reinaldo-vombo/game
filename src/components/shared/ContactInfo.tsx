import { Icon } from "../../../config/icon"
import { Separator } from "../ui/separator"

const ContactInfo = () => {
   return (
      <div className="flex flex-col justify-start space-y-7">
         <div className="flex items-center gap-4">
            <i className="secondary w-8 h-8 rounded-full flex-center">
               <Icon.phone width={20} />
            </i>
            <span>(+244) 023 456 789</span>
         </div>
         <div className="flex items-center gap-4">
            <i className="secondary w-8 h-8 rounded-full flex-center">
               <Icon.envelope width={20} />
            </i>
            <span>reinaldo@gmail.com</span>
         </div>
         <div className="flex items-center gap-4">
            <i className="secondary w-16 h-8 rounded-full flex-center">
               <Icon.pin width={20} />
            </i>
            <span className="text-sm">Morro Bento, R. Angohotel, Condomínio Interland, Rua: Luanda, Edifício nº 36, Apartamento n° 1 R/C.</span>
         </div>
         <div className="flex items-center gap-4">
            <b>HORÁRIO DE ATENDIMENTO:</b>
            <span className="text-sm">Segunda – Sexta: 09h30 – 19h00 | Sábado: 10h00 – 20h00</span>
         </div>
         <Separator className="my-4 bg-black" />
      </div>
   )
}

export default ContactInfo
