'use client'
import { CartItem } from '@/interface/product'
import React, { ReactNode, createContext, useContext, useState } from 'react'
interface IPageProvider {
   children: ReactNode
}
interface IProvider {
   handleShowCart: () => void
   handleShowVideo: () => void
   handleShowSidebar: () => void
   handleShowGallery: () => void
   addToCart: (item: CartItem) => void
   removeFromCart: (itemId: string) => void;
   increaseQuantity: (itemId: string) => void
   decreaseQuantity: (itemId: string) => void
   showCart: boolean
   total: number
   totalQuantity: number
   cart: CartItem[]
   showVideo: boolean
   showSidebar: boolean
   showModalGallery: boolean
   isMutted: boolean
   setIsMutted: React.Dispatch<React.SetStateAction<boolean>>
   hideInfo: boolean
   setHideInfo: React.Dispatch<React.SetStateAction<boolean>>
}


export const MainContext = createContext<IProvider | undefined>(undefined)

export const useProvider = (): IProvider => {
   const context = useContext(MainContext)

   if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider')
   }
   return context

}
export function PageProvider({ children }: IPageProvider) {
   //states
   const [showCart, setShowCart] = useState(false)
   const [showVideo, setShowVideo] = useState(false)
   const [showSidebar, setShowSidebar] = useState(false)
   const [isMutted, setIsMutted] = useState(true)
   const [hideInfo, setHideInfo] = useState(false)
   const [showAlert, setShowAlert] = useState(false);
   const [showModalGallery, setShowModalGallery] = useState(false)
   const [cart, setCart] = useState<CartItem[]>([]);

   //fuctions
   const handleShowCart = () => {
      setShowCart(!showCart)
   }
   const handleShowVideo = () => {
      setShowVideo(!showVideo)
   }
   const handleShowSidebar = () => {
      setShowSidebar(!showSidebar)
   }
   const handleShowGallery = () => {
      setShowModalGallery(!showModalGallery)
   }
   const addToCart = (item: CartItem) => {
      const itemInCart = cart.find((cartItem) => cartItem._id === item._id);
      setShowAlert(true)
      if (itemInCart) {
         setCart((prevCart) =>
            prevCart.map((cartItem) =>
               cartItem._id === item._id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
            )
         );
      } else {
         // If the item is not in the cart, add it
         setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      }
   };
   const removeFromCart = (itemId: string) => {
      setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
   };

   const increaseQuantity = (itemId: string) => {
      setCart((prevCart) =>
         prevCart.map((item) =>
            item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
         )
      );
   };

   const decreaseQuantity = (itemId: string) => {
      setCart((prevCart) =>
         prevCart.map((item) =>
            item._id === itemId
               ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
               : item
         )
      );
   }
   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
   const totalQuantity = cart.length



   const value = {
      handleShowCart,
      handleShowVideo,
      handleShowSidebar,
      handleShowGallery,
      decreaseQuantity,
      showModalGallery,
      removeFromCart,
      increaseQuantity,
      setIsMutted,
      setHideInfo,
      totalQuantity,
      showSidebar,
      showVideo,
      addToCart,
      isMutted,
      hideInfo,
      showCart,
      total,
      cart
   }
   return (
      <MainContext.Provider value={value}>
         {children}
      </MainContext.Provider>
   )
}
