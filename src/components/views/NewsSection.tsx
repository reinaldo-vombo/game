import { INews } from '@/interface/product'
import Link from 'next/link'


const NewsSection = ({ post }: INews) => {
   return (
      <section className='relative bg-center bg-cover bg-fixed flex-center h-screen overlay' style={{ backgroundImage: `url(/db-cover.jpg)` }}>
         <div className='relative flex flex-col items-center justify-center'>
            <h2 className='h1-bold'>Um Novo Portal Abrira Brevemente</h2>
            <Link href='/' className='underline'>Voltar para loja</Link>
         </div>
      </section>
   )
}

export default NewsSection
