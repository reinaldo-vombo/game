import { defineType } from "sanity"

export const product = defineType({
  name: "user",
  title: "Utílizadores",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nome",
      type: "string",
    },
    
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "password",
      title: "Palavra-passe",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
    },
    {
      name: "comment",
      title: "omentario",
      type: "array",
      of: [{ type: "string" }],
    },
    
  ],
})
