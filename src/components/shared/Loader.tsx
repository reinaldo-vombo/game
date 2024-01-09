import React from 'react'
import { Icon } from '../../../config/icon'

const Loader = () => {
   return (
      <div className='flex items-center justify-center'>
         <Icon.loader className='animate-spin text-white' width={20} />
      </div>
   )
}

export default Loader
