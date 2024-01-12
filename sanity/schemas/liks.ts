import { defineType } from "sanity";

export const likes = defineType({
  name: "likes",
  title: "Lista de desejos",
  type: "document",
  fields: [
    {
      name: "likedBy",
      title: "Gostou",
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'post',
      type: 'reference',
      to: [{type: 'games'}]
    }
  ],
});