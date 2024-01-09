'use client'
import { useState } from "react"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { searchProduct } from "@/app/action"
import useDebounce from "@/hooks/useDebounce"
import Loader from "./Loader"
interface ISearch {
   data: {
      poster: string
      slug: string
      title: string
      _id: string
   }[] | []
   isLoading: boolean
   searchQuery: string
}
const InputField = () => {
   const [searchQuery, setSearchQuery] = useState('')

   const debouncedSearchTerm = useDebounce(searchQuery, 300);
   // Query for fetching products based on the debounced search term
   const { data, error, isPending } = useQuery({
      queryKey: ['searchQuery', debouncedSearchTerm],
      queryFn: async () => {
         if (debouncedSearchTerm !== '') {
            try {
               const result = await searchProduct(debouncedSearchTerm);
               return result;
            } catch (error) {
               console.error('Error searching products:', error);
               return [];
            }
         } else {
            return [];
         }
      }
   });

   return (
      <div className='w-full md:w-[25rem]'>
         <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
         <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
               <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
               </svg>
            </div>
            {isPending && (
               <div className="absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none">
                  <Loader />
               </div>
            )}
            <input type="text" onChange={(e) => setSearchQuery(e.target.value)} className="block border-none outline-none w-full p-4 ps-10 text-sm text-white border rounded-2xl secondary focus-within:outline-none  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Mockups, Logos..." />
            {searchQuery !== '' && data && (
               <SearchResut searchQuery={searchQuery} data={data} isLoading={isPending} />
            )}
         </div>
      </div>
   )
}
const SearchResut = ({ data, searchQuery }: ISearch) => {

   if (!data || data.length === 0) {
      // Display a message when there is no data
      return <div className="absolute p-1 bg-black inset-x-0 text-center">
         <h1>Desculpe, não encontramos nenhum producto para {searchQuery}</h1>
      </div>;
   }
   return (
      <div className='absolute z-10 bg-black rounded-md w-full p-2'>
         <ul className='text-black'>
            {data && data.map((list, i) => (
               <li key={i} className='hover:bg-slate-700 hover:text-black rounded-md p-1 text-white text-lg'>
                  <Link href={`/product/${list.slug}`}>
                     {list.title}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
}
export default InputField
