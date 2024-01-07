'use server'

import { GameItem } from "@/interface/product"
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { hash } from 'bcrypt';
import { jwtDecode } from "jwt-decode";
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid'
import { client } from "../../sanity/lib/client"
import { DecodedToken } from "@/interface/token";

export async function getUser() {
  const getUser = cookies().get('player');
  const userString = getUser?.value;

  const user = userString ? JSON.parse(userString) : null;
  return user;
}


export const register = async (e: FormData) => {
   const name = e.get('name')?.toString()
   const email = e.get('email')?.toString()
   const password = e.get('password')?.toString()
   
   if (!name || !email || !password) {
      return {
         error: 'Incomplete form data',
       };
   }

   try {
      const userId = uuid();
      // const hashedPassword = await hash(password, 10);
      const token = jwt.sign({ userId, email }, process.env.NEXT_PUBLIC_TOKEN_KEY , { expiresIn: '1h' });

      await client.create({
         _type: 'user',
         _id: userId,
         name,
         email,
         password,
         token
      });
      revalidatePath('/')
      return {
         success: true,
       };
   } catch (error) {
      console.error('Error during user registration:', error);
    // Return an error response
    return {
      error: 'Registration failed',
    };
   }
   
}
export const lognin = async (e: FormData) => {
   const email = e.get('email')?.toString()
   const password = e.get('password')?.toString()
   
   if ( !email || !password) {
      return {
         error: 'Prencha todos os campos',
       };
   }
   try {
      const result = await client.fetch(
         `*[_type == 'user' && email == $email && password == $password  ][0]{
           _id,
           token,
           name,
           // Add other necessary fields
         }`,
         {
           email,
           password
         }
       );
       if (!result) {
         return {
           error: 'Invalid email or password',
         };
       }

      const token: DecodedToken = jwtDecode(result.token)
      let userId: string | undefined;
      if (token && token.userId) {
         userId = token.userId;
       } else {
         console.error('Token is invalid or does not contain a userId.');
         
       }

       const user = await client.fetch(
         `*[_type == 'user' && _id == $userId  ][0]{
           _id,
           name,
           email,
           'image' : image.asset->url
           // Add other necessary fields
         }`,
         {
            userId
         }
       );

       const userString = JSON.stringify(user);

       cookies().set('player',userString)
       revalidatePath('/')
      return {
         success: true,
       };
      
   } catch (error) {
      console.error('Error during user registration:', error);
    // Return an error response
    return {
      error: 'Registration failed',
    };
   }

}
export const logout = async () => {
   cookies().delete('player')
}
export const postFeedbak = async (e: FormData) => {
   const user = await getUser()

   const type = e.get('type')?.toString()
   const message = e.get('message')?.toString()
   const imageUrl = e.get('imageUrl')?.toString()
   
   if (!type || !message || !imageUrl) {
      return {
      error: 'Por-favor prencha todos os campos',
      };
   }
   
 const postId = uuid();
 const feedbackData = {
   _type: 'feedbacks',
   _id: postId,
   type,
   message,
   screeshot: imageUrl,
   posteby: {
      _type: 'reference',
      _ref: user._id,
    },
}

   try {
      await client.create(feedbackData);

      revalidatePath('/');

      return {
         success: true,
      };

   } catch (error) {
    console.error('Error posting feedback:', error);
    return {
      error: 'Failed to post feedback',
    };
  }
   
}
export const fetchProducts = async (category: string) => {
   const product = await client.fetch<GameItem[]>(
      `*[_type == "games" && $category in category[]->title] {
         _id,
         show_case,
         type,
         payment,
         title,
         category[]->{
            title
         },
         'image' : image.asset->url,
         'poster' : poster.asset->url,
         playes,
         cumpuny,
         online,
         avalible,
         violance,
         psn,
         'cover_image': cover_image.asset->url,
         video_file,
         price,
         discount,
         price,
         color,
         "slug": slug.current
      }`, {category})
    return product
}
export const singleProduct = async (slug: string) => {
   const product = await client.fetch<GameItem>(
      `*[_type == "games" && slug.current == $slug][0] {
         _id,
         show_case,
         type,
         "payment": payment[].asset->url,
         "avalible": avalible[].asset->url,
         "violance": violance[].asset->url,
         "video_file": video_file.asset->url,
         title,
         category[]->{
            title
         },
         'image' : image.asset->url,
         'poster' : poster.asset->url,
         playes,
         cumpuny,
         online,
         psn,
         'cover_image': cover_image.asset->url,
         price,
         discount,
         price,
         color,
         "slug": slug.current
      }`, {slug})
    return product
}