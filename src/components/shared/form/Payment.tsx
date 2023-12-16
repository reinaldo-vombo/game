'use client'
import React, { useState } from 'react'
import Button from '../Button'
import CreditCard from '../CreditCard'
import { config } from '../../../../config/siteConfig'

const Payment = () => {

   const [isFlipped, setIsFlipped] = useState(false);
   const [cardNumber, setCardNumber] = useState('');
   const [selectedBank, setSelectedBank] = useState<{
      fullName: string;
      name: string;
      logo: string;
      color: string;
   } | null>(null);
   const [cardInfo, setCardInfo] = useState({
      cardOwner: '',
      cardNumber: '',
      bank: selectedBank?.name,
      month: '',
      year: '',
      cvv: '',
   });


   const [formattedCardNumber, setFormattedCardNumber] = useState('');

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target as HTMLInputElement;
      setCardInfo((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputText = e.target.value;
      inputText = inputText.replace(/\D/g, '');
      inputText = inputText.slice(0, 16); // Adjusted to 16 digits
      const formattedCardNumber = inputText.replace(/(\d{4})/g, '$1 ');
      setFormattedCardNumber(formattedCardNumber);
      setCardInfo((prevData) => ({
         ...prevData,
         cardNumber: inputText,
      }));
   };
   const handleFlip = () => {
      setIsFlipped(!isFlipped);
   };
   const handleBankChange = (event: any) => {
      const selectedBank = config.BANKS.find((bank) => bank.name === event.target.value);
      setSelectedBank(selectedBank || null);
   };

   return (
      <div className='grid place-items-center'>
         <div className='card secondary mt-20 w-full max-w-xl p-4 sm:p-5'>
            <CreditCard
               isFlipped={isFlipped}
               selectedBank={selectedBank}
               cardNumber={formattedCardNumber}
               info={cardInfo}
            />
            <form>
               <div className='mt-7 space-y-4'>
                  <label className='block'>
                     <span>Anexar Comprovativo</span>
                     <div className='filepond fp-bordered fp-grid mt-1.5 [--fp-grid:2]'>
                     </div>
                  </label>
                  <div className="relative">
                     <span className="absolute start-0 bottom-3 text-gray-200 dark:text-gray-300">
                        <svg className="w-6 h-6 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                           <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.648 9.636c.25 0 .498-.064.717-.186a1 1 0 1 1 .979 1.745 3.475 3.475 0 1 1 .185-5.955 1 1 0 1 1-1.082 1.681 1.475 1.475 0 1 0-.799 2.715Zm6.186 0c.252 0 .5-.063.72-.187a1 1 0 1 1 .974 1.746 3.475 3.475 0 1 1 .188-5.955 1 1 0 0 1-1.084 1.681 1.475 1.475 0 1 0-.8 2.715h.002Z" />
                        </svg>
                     </span>
                     <input
                        type="number"
                        id="floating-phone-number"
                        onChange={handleCardNumberChange}
                        value={cardInfo.cardNumber}
                        name={cardNumber}
                        className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
                     <label htmlFor="floating-phone-number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
                  </div>
                  <div className="relative">
                     <label htmlFor="underline_select" className="sr-only">Underline select</label>
                     <select id="underline_select" onChange={handleBankChange} className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected>Escolha o seu Banco</option>
                        {config.BANKS.map((item, i) => (
                           <option value={item.name} key={i} className='flex items-center gap-4'>{item.name}</option>
                        ))}
                     </select>
                  </div>

                  <div className="relative">
                     <span className="absolute start-0 bottom-3 text-gray-200 dark:text-gray-400">
                        <svg className="w-4 h-4 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                           <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                        </svg>
                     </span>
                     <input
                        type="text"
                        onChange={handleInputChange}
                        value={cardInfo.cardOwner}
                        name='cardOwner'
                        id="floating-phone-number"
                        className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
                     <label htmlFor="floating-phone-number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
                  </div>

                  <div className='grid grid-cols-1 gap-4 sm:grid-cols-12'>
                     <div className='col-span-4'>
                        <div className="relative">
                           <span className="absolute start-0 bottom-3 text-gray-200 dark:text-gray-400">
                              <svg className="w-4 h-4 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                 <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                              </svg>
                           </span>
                           <input
                              type="number"
                              onChange={handleInputChange}
                              value={cardInfo.month}
                              name='month'
                              id="floating-phone-number"
                              className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
                           <label htmlFor="floating-phone-number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
                        </div>
                     </div>
                     <div className='col-span-4'>
                        <div className="relative">
                           <span className="absolute start-0 bottom-3 text-gray-200 dark:text-gray-400">
                              <svg className="w-4 h-4 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                 <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                              </svg>
                           </span>
                           <input
                              type="number"
                              onChange={handleInputChange}
                              value={cardInfo.year}
                              name='year'
                              id="floating-phone-number"
                              className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
                           <label htmlFor="floating-phone-number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
                        </div>
                     </div>
                     <div className='col-span-4' onMouseEnter={handleFlip}
                        onMouseLeave={handleFlip}>
                        <div className="relative">
                           <span className="absolute start-0 bottom-3 text-gray-200 dark:text-gray-400">
                              <svg className="w-4 h-4 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                 <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                              </svg>
                           </span>
                           <input type="text"
                              onChange={handleInputChange}
                              value={cardInfo.cvv}
                              name='cvv'
                              className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
                           <label
                              htmlFor="floating-phone-number"
                              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                           >CVV</label>
                        </div>
                     </div>
                  </div>
                  <div className='flex justify-center space-x-2 pt-4'>
                     <Button>
                        Enviar
                     </Button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Payment