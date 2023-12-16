import Image from "next/image"
interface ICard {
   isFlipped: boolean
   cardNumber: string
   selectedBank: {
      fullName: string;
      name: string;
      logo: string;
      color: string;
   } | null
   info: {
      cardOwner: string,
      cardNumber: string
      bank?: string
      month: string
      year: string
      cvv: string
   }
}

const CreditCard = ({ isFlipped, selectedBank, cardNumber, info }: ICard) => {

   return (
      <div className='relative mx-auto -mt-20 h-52 w-[24rem] rounded-lg text-white shadow-xl transition-transform hover:scale-110 lg:h-48 lg:w-80'>
         <div className={`credit-card  ${isFlipped ? 'flipped' : ''}`} >
            <div className="card-side p-4 bg-gradient-to-r from-indigo-400 to-indigo-600" style={{ background: selectedBank?.color }}>
               <div className="flex-between w-full">
                  <Image src={selectedBank ? selectedBank.logo : '/credit-card.png'} className="w-20" width={40} height={40} alt="logotipo" />
                  <Image src='/multicaixa.png' className="w-20" width={40} height={40} alt="logotipo" />
               </div>
               <div className="flex-start w-full">
                  <Image src='/chip.png' width={40} height={40} alt="logotipo" />
               </div>
               <div className="card-number w-full text-2xl text-center">{cardNumber ? cardNumber : '1234 5678 9012 3456'}</div>
               <div className="card-holder w-full flex-between">
                  <span>{info.cardOwner || 'Joe Doe'}</span>
                  <span>12/23</span>
               </div>
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