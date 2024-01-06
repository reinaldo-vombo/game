import { defineType } from "sanity"

export const categorys = defineType({
  name: "categorys",
  title: "Categorias",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tipo de categoria",
      type: "string",
    },
    
    
  ],
})
