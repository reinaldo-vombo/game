export interface IGameCard {
   _id: string
   title: string
   slug: string
   image: string
   price: number
   discount: number
}
export interface GameItem {
   product: {
      _id: string;
      payment: string[]
      video_url: string[];
      title: string;
      desc: string;
      image: string;
      poster: string;
      playes: number;
      cumpuny: string;
      online: boolean;
      avalible: string[];
      violance: string[];
      psn: string;
      cover_image: string;
      alt_cover: string;
      video_file: string;
      price: number;
      discount: number;
      color: string;
      slug: string;
      images: MediaItem[];
      info: TabItem[];
   }
 }
 
 export interface TabItem {
   name: string;
   image: string[];
   type: string;
   desc?: string;
 }
 
 interface MediaItem {
   name: string;
   image: string[];
   type: string;
 }
 
 interface CartItems {
   _id: string;
   title: string;
   image: string;
   price: number;
   quantity: number;
 }
 
 interface BankItem {
   name: string;
   logo: string;
   color?: string; // optional, as mentioned in a previous context
 }
export interface IAceesory {
   _id: string
   title: string
   slug: string
   image: string
   price: number
   discount: number
}
export interface CartItem {
   _id: string;
   title: string;
   image: string
   price: number
   quantity: number;
}
export interface ICart{
   _id: string
   title: string
   quantity: number
}
export interface ISliderData {
   data: {
      _id: string
      title: string
      slug: string
      image: string
      price: number
      discount: number
      video_file: string
      
   }[]
}
export interface IPageParams {
   params: {
      slug: string
   }
}
export interface IBlog {
   post: {
      _id: string
      slug: string
      title: string
      subTitle?: string
      image: string
      descrition: string
      comment: number
      likes: number
      audio: number
   }
}
export interface INews {
   post: {
      slug: string
      title: string
      image: string
      cover: string
   }
}