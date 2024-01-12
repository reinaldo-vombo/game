import SubNav from "@/components/shared/SubNav"
import Footer from "@/components/views/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
   title: 'Políticas de Privacidade'
}

const page = () => {
   return (
      <>
         <section>
            <SubNav showLinks={true} />
            <div className='p-40 bg-cover bg-center overlay relative' style={{ backgroundImage: 'url(/about.jpg)' }}>
               <div className='relative'>
                  <div className='text-center'>Políticas de Privacidade</div>
               </div>
            </div>
            <div className="container mt-6 space-y-8 text-slate-500">
               <div className="space-y-5">
                  <h2 className="h2-bold">Privacidade & Segurança</h2>
                  <p>Em de acordo com a necessidade de segurança e manutenção do sigilo dos seus dados a <b className="text-[#2993FA]">Gamestore</b> tem o compromisso com a privacidade e a segurança de seus clientes durante todo o processo de navegação, compra e  cadastros pelo site. Seus dados cadastrais como nome, endereço e outros, nunca serão vendidos ou trocados, só serão divulgados para terceiros quando tais informações forem necessárias para o processo de entrega e para cobrança. Os seus dados pessoais são peças fundamentais para que o seu pedido chegue em segurança.</p>
                  <p>A <b className="text-[#2993FA]">Gamestore</b> utiliza cookies e informações de sua navegação (sessão do browser) com o objetivo de traçar um perfil do público que visita o site e aperfeiçoar sempre nossos serviços, produtos, conteúdos e garantir as melhores ofertas e promoções para você. Durante todo este processo mantemos suas informações em sigilo absoluto. Vale lembrar que seus dados são registrados pela <b className="text-[#2993FA]">Gamestore</b> de forma automatizada, dispensando manipulação humana.</p>
                  <p>Para que estes dados permaneçam seguros evite compartilhar a sua palavra-passe com outras pessoas, mesmo que sejam amigos e parentes.</p>
                  <p>Cadastre-se e compre com tranquilidade, sem preocupações 🙂</p>
               </div>
               <div className="space-y-5">
                  <h2 className="h2-bold">Comentários</h2>
                  <p>Quando os visitantes deixam comentários no site, coletamos os dados mostrados no formulário de comentários, além do endereço de IP e de dados do navegador do visitante, para auxiliar na detecção de spam.</p>
               </div>
               <div className="space-y-5">
                  <h2 className="h2-bold">Cookies</h2>
                  <p>Ao deixar um comentário no site, você poderá optar por salvar seu nome, e-mail e site nos cookies. Isso visa seu conforto, assim você não precisará preencher seus dados novamente quando fizer outro comentário. Estes cookies duram um ano.</p>
                  <p>Se você tem uma conta e acessa este site, um cookie temporário será criado para determinar se seu navegador aceita cookies. Ele não contém nenhum dado pessoal e será descartado quando você fechar seu navegador.</p>
                  <p>Quando você acessa sua conta no site, também criamos vários cookies para salvar os dados da sua conta e suas escolhas de exibição de tela. Cookies de login são mantidos por dois dias e cookies de opções de tela por um ano. Se você selecionar “Lembrar-me”, seu acesso será mantido por duas semanas. Se você se desconectar da sua conta, os cookies de login serão removidos</p>
               </div>
               <div className="space-y-5">
                  <h2 className="h2-bold">Mídia Incorporada de Outros Sites</h2>
                  <p>Artigos neste site podem incluir conteúdo incorporado como, por exemplo, vídeos, imagens, artigos, etc. Conteúdos incorporados de outros sites se comportam exatamente da mesma forma como se o visitante estivesse visitando o outro site.</p>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default page
