import { defineType } from "sanity"

export const media = defineType({
  name: "media",
  title: "Sobre o jogo",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Resumo",
      type: "string",
    },
    
    {
      name: "image",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "type",
      title: "Tipo de conteúdo",
      type: "string",
    },
    {
      name: "content",
      title: "Conteúdo",
      type: "array",
      of: [{type: 'block'}]
    },
    
  ],
})
