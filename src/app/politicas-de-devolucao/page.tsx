import SubNav from "@/components/shared/SubNav"
import Footer from "@/components/views/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
   title: 'Políticas de Devolução & Reembolso'
}

const page = () => {
   return (
      <>
         <section>
            <SubNav showLinks={true} />
            <div className='p-40 bg-cover bg-center overlay relative' style={{ backgroundImage: 'url(/about.jpg)' }}>
               <div className='relative'>
                  <div className='text-center'>Políticas de Devolução & Reembolso</div>
               </div>
            </div>
            <div className="container mt-6 space-y-8 text-slate-500">
               <div className="space-y-5">
                  <h2 className="h2-bold">Política de Devolução & Reembolso</h2>
                  <p>O jogo deverá ser devolvido na central da <b className="text-[#2993FA]">Gamestore</b> ou a domicílio. No mesmo estado (conservação) que foi entregue;</p>
                  <ul>
                     <li>Perdas ou danos totais do jogo, o cliente será submetido a uma multa de 30.000 kzs;</li>
                     <li>Danos parciais do disco, o cliente será submetido a uma multa de 15.000 kzs;</li>
                     <li>Danos parciais da capa, o cliente será submetido a uma multa de 8.000 kzs;</li>
                     <li>Danos dos manuais, o cliente será submetido uma multa de 5.000 kzs;</li>
                     <li>Não devolver na data prevista, o cliente será submetido a uma multa de 1000 kzs diários;</li>
                     <li>A extensão do prazo de aluguer deve ser feita até o dia anterior à data prevista para devolução e, o cliente será submetido a um pagamento de + 50% do valor de aluguer diários;</li>
                     <li>Em casos de troca, o cliente tem até 24 horas apos a aquisição do jogo para efetuar a troca, por outro jogo do mesmo valor ou superior, desde que pague a diferença</li>
                     <li>São permitidas devoluções antecipadas sem reembolso;</li>
                  </ul>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default page
