
import Categories from '@/components/views/Categories'
import { Metadata } from 'next'
export const metadata: Metadata = {
   title: 'As melhores categorias'
}
export default function Page() {
   return (
      <>
         <Categories />
      </>
   )
}
