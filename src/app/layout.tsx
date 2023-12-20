import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/shared/NavBar'
import SideBar from '@/components/shared/SideBar'
import { PageProvider } from '@/context/Provider'
import Cart from '@/components/shared/Cart'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} blackBg text-white`}>
        <PageProvider>
          <main className='w-full'>
            {children}
            <Cart />
          </main>
        </PageProvider>
      </body>
    </html>
  )
}
