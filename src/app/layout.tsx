import type { Metadata } from 'next'
import { PageProvider } from '@/context/Provider'
import { Separator } from '@/components/ui/separator'
import { Toaster } from "@/components/ui/sonner"
import { Nunito } from 'next/font/google'
import Cart from '@/components/shared/Cart'
import Image from 'next/image'
import Dropdown from '@/components/shared/Dropdown'
import Feedbacks from '@/components/shared/form/Feedbacks'
import './globals.css'
import BottomNav from '@/components/shared/BottomNav'
import QueryProvider from '@/context/QueryProvider'
import { CookiesProvider } from 'next-client-cookies/server';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://game-ten-zeta.vercel.app'),
  title: {
    template: '%s | Gamestore',
    default: 'Gamestore | Loja Digital', // a default is required when creating a template
  },
  applicationName: 'Gamestore-app',
  description: 'Descubra um mundo de jogos como nunca antes com Gamestore, o balcão único para todas as suas necessidades de jogos. Quer você seja um jogador hardcore, um jogador casual ou esteja procurando o presente perfeito, nós temos o que você precisa!',
  authors: [{ name: 'Reinaldo Vombo' }],
  creator: 'Reinaldo Vombo',
  publisher: 'Reinaldo Vombo',
  openGraph: {
    title: 'Gamestore',
    description: 'Mergulhe em nossa extensa coleção dos melhores e mais recentes jogos em todas as plataformas. De ação emocionante a aventuras envolventes e diversão para toda a família, encontre os jogos que você adora e descubra novos títulos emocionantes para adicionar à sua coleção.',
    images: './opengraph-image.png',
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt': '/pt-PT'
    }
  },
  keywords: [
    "Jogos de ação e aventura",
    "Multiplayer Online Game Store",
    "Game Bundles Sale",
    "Virtual Reality Games Shop",
    "Exclusive Console Games"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${nunito.className} blackBg text-white`}>
        <PageProvider>
          <QueryProvider>
            <CookiesProvider>
              <main className='w-full relative'>
                {children}
                <BottomNav />
                <Cart />
                <Dropdown className='hidden right-0 bottom-0 gap-6 w-14 h-14 sm:block' image={<Image src='/elipse.gif' className='absolute z-10 m-auto inset-0 object-cover' width={40} height={40} alt='icon' />}>
                  <h2 className="text-center">Portal de feedbacks</h2>
                  <Separator className="my-4 bg-slate-700" />
                  <Feedbacks />
                </Dropdown>
              </main>
            </CookiesProvider>

          </QueryProvider>
          <Toaster />
        </PageProvider>
      </body>
    </html>
  )
}
