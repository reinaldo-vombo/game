import NavBar from '@/components/shared/NavBar'
import SideBar from '@/components/shared/SideBar'
import Footer from '@/components/views/Footer'
import { ILayout } from '@/interface/layout'
import { currentUser } from '@/utils/userUtils'
import React from 'react'

const Rootlayout = ({ children }: ILayout) => {

   return (
      <div>
         <NavBar />
         <SideBar />
         <div className='p-4 lg:ml-[17rem]'>
            {children}
            <Footer />
         </div>
      </div>
   )
}

export default Rootlayout
