import React, { ReactNode, use } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Footer from '../views/Footer'
import { getUser } from '@/app/action'

const Main = async ({ children }: { children: ReactNode }) => {
   const user = await getUser()

   return (
      <>
         <NavBar user={user} />
         <SideBar />
         <div className='p-4 lg:ml-[17rem]'>
            {children}
            <Footer />
         </div>
      </>
   )
}

export default Main
