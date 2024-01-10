import { defineType } from "sanity"

export const blogs = defineType({
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
      name: "descrition",
      title: "Sub descrição",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
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
      title: "Author",
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: "content",
      title: "Conteúdo",
      type: "array",
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
            }
          ]
        }
      ]
    },
    // {
    //   name: "comments",
    //   title: "Comentarios",
    //   type: "array",
    //   of: [{ type: "reference", to: [{ type: "comment" }] }],
    // },
  ],
})
