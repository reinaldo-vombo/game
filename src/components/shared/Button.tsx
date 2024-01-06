import React, { ReactNode } from 'react'
interface IButton {
   onClick?: () => void;
   children: ReactNode
   type?: 'button' | 'submit'
   className?: string
   color?: string
}

const Button = ({ children, type, onClick, className, color }: IButton) => {

   const buttonText = typeof children === 'string' ? children : '';
   return (
      <button type={type} aria-label={buttonText} onClick={onClick} className={`
         relative z-0 flex items-center justify-center gap-2 overflow-hidden w-full rounded-lg border-[1px] 
         ${className ? className : 'border-violet-300'} px-4 py-2 font-semibold
         uppercase ${className ? className : 'text-violet-300'} transition-all duration-500
         
         before:absolute before:inset-0
         before:-z-10 before:translate-x-[150%]
         before:translate-y-[150%] before:scale-[2.5]
         before:rounded-[100%] ${color ? `before:bg-[${color}]` : 'before:bg-violet-300'} 
         before:transition-transform before:duration-1000
         before:content-[&quot;&quot;]

         hover:scale-105 hover:text-neutral-900
         hover:before:translate-x-[0%]
         hover:before:translate-y-[0%]
         active:scale-95`}>{children}</button>
   )
}

export default Button