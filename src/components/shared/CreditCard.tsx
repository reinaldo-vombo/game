import { ICard } from "@/interface/product"
import Image from "next/image"

const CreditCard = ({ isFlipped, selectedBank, cardNumber, info, paymentType }: ICard) => {

   return (
      <div className='relative mx-auto -mt-20 h-52 w-[24rem] rounded-lg text-white shadow-xl transition-transform hover:scale-110 lg:h-48 lg:w-80'>
         <div className={`credit-card  ${isFlipped ? 'flipped' : ''}`} >
            <div className="card-side p-4 bg-gradient-to-r from-indigo-400 to-indigo-600" style={{ background: selectedBank?.color }}>
               {paymentType === 'Multicaixa' ? (
                  <>
                     <div className="flex-between w-full">
                        <Image src={selectedBank ? selectedBank.logo : '/credit-card.png'} className="w-12" width={400} height={400} alt="logotipo" />
                        <Image src='/multicaixa.png' className="w-20" width={400} height={400} alt="logotipo" />
                     </div>
                     <div className="flex-start w-full">
                        <Image src='/chip.png' className="w-12" width={400} height={400} alt="logotipo" />
                     </div>
                     <div className="card-number w-full text-2xl text-center">{cardNumber ? cardNumber : '#### #### #### ####'}</div>
                     <div className="card-holder w-full flex-between">
                        <span>{info.cardOwner || 'Joe Doe'}</span>
                        <span>12/23</span>
                     </div>
                  </>
               ) : (
                  <h2 className="text-center">Está funcão ainda não está disponivel</h2>
               )}
            </div>
            <div className="card-side back py-5" style={{ background: selectedBank?.color }}>
               <div className='bg-black w-full h-8' />
               <div className="w-full px-6">
                  CVV
                  <div className='bg-black w-full h-12 rounded-lg text-white'>
                     {info.cvv}
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default CreditCard