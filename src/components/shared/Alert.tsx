import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react'
interface IAlert {
   title: string
   desc: string
}


const AlertModal = ({ title, desc }: IAlert) => {
   return (
      <Alert>
         <Terminal className="h-4 w-4" />
         <AlertTitle>product</AlertTitle>
         <AlertDescription>
            jkjjj
         </AlertDescription>
      </Alert>
   )
}

export default AlertModal