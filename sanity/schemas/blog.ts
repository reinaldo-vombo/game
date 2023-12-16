import { defineType } from "sanity"

export const product = defineType({
  name: "blog",
  title: "Eventos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nome do evento",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "cover_image",
      title: "Imagem de fundo",
      type: "image",
    },
    {
      name: "postedby",
      title: "Postado por",
      type: "string",
    },
    
  ],
})
