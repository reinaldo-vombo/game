import SubNav from "@/components/shared/SubNav";
import ContactSetion from "@/components/views/ContactSetion";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: 'Contactos'
}


export default function Page() {
   return (
      <section>
         <SubNav showLinks={true} />
         <div className='p-40 bg-cover bg-center overlay relative' style={{ backgroundImage: 'url(/about.jpg)' }}>
            <div className='relative'>
               <div className='text-center'>Contacto</div>
            </div>
         </div>
         <ContactSetion />
      </section>
   )
}