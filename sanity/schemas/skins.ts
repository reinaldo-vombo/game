import { defineType } from "sanity"

export const skins = defineType({
  name: "skins",
  title: "Capas",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Capa",
      type: "string",
      description:'Nome da capa'
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "cover_image",
      title: "Capa de imagem",
      type: "image",
    },
    {
      name: "price",
      title: "Preço",
      type: "number",
    },
    
  ],
})
