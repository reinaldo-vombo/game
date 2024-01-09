'use client'

import {
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
interface IProvider {
   children: ReactNode
}

const QueryProvider = ({ children }: IProvider) => {
   const [queryClient] = useState(() => new QueryClient)
   return (
      <QueryClientProvider client={queryClient}>
         {children}
      </QueryClientProvider>
   )
}

export default QueryProvider
