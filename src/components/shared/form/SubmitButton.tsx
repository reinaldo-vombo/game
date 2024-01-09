'use client'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {

   const { pending } = useFormStatus()
   return (
      <>
         <Button type='submit' className="primary w-full disabled:bg-indigo-300" aria-disabled={pending}>
            {pending ? 'sending' : 'Enviar'}
         </Button>
      </>
   )
}

export default SubmitButton
