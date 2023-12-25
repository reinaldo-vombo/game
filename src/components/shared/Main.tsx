import React, { ReactNode } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Footer from '../views/Footer'

const Main = ({ children }: { children: ReactNode }) => {
   return (
      <>
         <NavBar />
         <SideBar />
         <div className='p-4 lg:ml-[17rem]'>
            {children}
            <Footer />
         </div>
      </>
   )
}

export default Main
