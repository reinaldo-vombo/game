import { defineType } from "sanity"

export const feedbacks = defineType({
  name: "feedbacks",
  title: "Feedbacks",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Tipo de categoria",
      type: "string",
    },
    {
      name: "message",
      title: "Menssagem",
      type: "string",
    },
    {
      name: "screeshot",
      title: "Captura de ecrã",
      type: "string",
    },
    {
      name: 'posteby',
      title: 'Utilizador',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    
  ],
})
