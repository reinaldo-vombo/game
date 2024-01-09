"use client"
import { Textarea } from '@/components/ui/textarea'
import { toast } from "sonner"
import React, { useRef, useState, } from 'react'

import { postFeedbak } from '@/app/action';
import SubmitButton from './SubmitButton'
import ScreeShootButton from './ScreeShootButton'
import SelecteButton from './SelecteButton'

const Feedbacks = () => {
  const ref = useRef<HTMLFormElement>(null)
  const [screenShoot, setScreenShoot] = useState('')
  const [selectedType, setSelectedType] = useState<string>('');

  async function handlePostFeedback(formData: FormData) {
    const result = await postFeedbak(formData)
    if (result?.error) {

      toast(result.error)
    } else {
      toast('Agradecemos o feedback')
      ref.current?.reset()
      setScreenShoot('')
      setSelectedType('')
    }
  }
  return (
    <form className='space-y-10' action={handlePostFeedback} ref={ref}>
      <SelecteButton selectedType={selectedType} setSelectedType={setSelectedType} />
      <div className="grid gap-2">
        <Textarea name='message' className='bg-slate-600 border-none' placeholder="A tua messagem" />
        <div className="flex items-center gap-3 relative">
          <SubmitButton />
          <ScreeShootButton screenShoot={screenShoot} setScreenShoot={setScreenShoot} />
        </div>
      </div>
    </form>
  )
}

export default Feedbacks
