'use client'
import { CartItem } from '@/interface/product'
import { IUser } from '@/interface/user'
import { currentUser } from '@/utils/userUtils'

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
interface IPageProvider {
   children: ReactNode
}
interface IProvider {
   handleShowCart: () => void
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
   showSidebar: boolean
   showModalGallery: boolean

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
   const [showSidebar, setShowSidebar] = useState(false)
   const [showModalGallery, setShowModalGallery] = useState(false)
   const [cart, setCart] = useState<CartItem[]>([]);

   //fuctions
   const handleShowCart = () => {
      setShowCart(!showCart)
   }
   const handleShowSidebar = () => {
      setShowSidebar(!showSidebar)
   }
   const handleShowGallery = () => {
      setShowModalGallery(!showModalGallery)
   }
   const addToCart = (item: CartItem) => {
      const itemInCart = cart.find((cartItem) => cartItem.postId === item.postId);
      if (itemInCart) {
         setCart((prevCart) =>
            prevCart.map((cartItem) =>
               cartItem.postId === item.postId
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
      setCart((prevCart) => prevCart.filter((item) => item.postId !== itemId));
   };

   const increaseQuantity = (itemId: string) => {
      setCart((prevCart) =>
         prevCart.map((item) =>
            item.postId === itemId ? { ...item, quantity: item.quantity + 1 } : item
         )
      );
   };

   const decreaseQuantity = (itemId: string) => {
      setCart((prevCart) =>
         prevCart.map((item) =>
            item.postId === itemId
               ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
               : item
         )
      );
   }
   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
   const totalQuantity = cart.length



   const value = {
      handleShowCart,
      handleShowSidebar,
      handleShowGallery,
      decreaseQuantity,
      showModalGallery,
      removeFromCart,
      increaseQuantity,
      totalQuantity,
      showSidebar,
      addToCart,
      showCart,
      total,
      cart,
   }
   return (
      <MainContext.Provider value={value}>
         {children}
      </MainContext.Provider>
   )
}
