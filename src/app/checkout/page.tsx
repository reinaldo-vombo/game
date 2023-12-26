import Payment from '@/components/shared/form/Payment'

const CheckoutPage = () => {
   return (
      <div className='space-y-7'>
         <div className="inline-flex items-center justify-center w-full text-clip">
            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 -translate-x-1/2 blackBg left-1/2 dark:bg-gray-900">
               Informação da conta
            </div>
         </div>
         <div className='flex-center text-center'>
            <p className='w-80'>Escolha um metodo de pagamento abaixo e preacha com informações apropriadas</p>
         </div>
         <div>
            <Payment />
         </div>
      </div>
   )
}

export default CheckoutPage
