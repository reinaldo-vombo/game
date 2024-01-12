
import { getUser } from '@/app/action'
import NavItems from '../NavItems'

const NavBar = async () => {
   const user = await getUser()

   return (
      <header className='hidden md:block text-white'>
         <NavItems user={user} />
      </header>
   )
}

export default NavBar