import SubNav from "@/components/shared/SubNav";
import ContactSetion from "@/components/views/ContactSetion";


export default function Page() {
   return (
      <section>
         <SubNav />
         <div className='p-40 bg-cover bg-center overlay relative' style={{ backgroundImage: 'url(/about.jpg)' }}>
            <div className='relative'>
               <div className='text-center'>Contacto</div>
            </div>
         </div>
         <ContactSetion />
      </section>
   )
}