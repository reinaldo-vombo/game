'use client'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, } from 'next-share'
import { usePathname } from 'next/navigation'

const SharedButton = ({ quote }: { quote: string }) => {

   const pathname = usePathname()
   const currentUrl = process.env.NEXT_PUBLIC_BASE_URL + pathname;

   return (
      <div>
         <FacebookShareButton
            url={currentUrl}
            quote={quote}
            hashtag={'#nextshare'}
            blankTarget={true}
         >
            <FacebookIcon size={32} round />
         </FacebookShareButton>
         <TwitterShareButton
            url={currentUrl}
            title={quote}
            blankTarget={true}
         >
            <TwitterIcon size={32} round />
         </TwitterShareButton>
         <WhatsappShareButton
            url={currentUrl}
            title={quote}
            separator=":: "
         >
            <WhatsappIcon size={32} round />
         </WhatsappShareButton>

      </div>
   )
}

export default SharedButton
