import { defineType } from "sanity"

export const tabs = defineType({
  name: "tabs",
  title: "Imagem de demo",
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
      name: "desc",
      title: "Descrição",
      type: "string",
    },
    
  ],
})
