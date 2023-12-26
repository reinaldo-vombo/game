import SubNav from "@/components/shared/SubNav";
import Register from "@/components/shared/form/Register";
import Image from "next/image";

export default function page() {
   return (
      <section>
         <SubNav />
         <div className='p-40 bg-cover bg-center overlay relative' style={{ backgroundImage: 'url(/about.jpg)' }}>
            <div className='relative'>
               <div className='text-center'>Cadastro</div>
            </div>
         </div>
         <div className="grid grid-cols-12 relative rounded-md bg-white m-12">
            <div className="col-span-5">
               <Image src='/pubg.jpg' className="w-full h-full object-cover" width={400} height={400} alt="" />
            </div>
            <Register />
         </div>
      </section>
   )
}