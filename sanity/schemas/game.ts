import { defineType } from "sanity"

export const games = defineType({
  name: "games",
  title: "Jogos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nome do produto",
      type: "string",
    },
    {
      name: "show_case",
      title: "Esibir informação",
      type: "boolean",
    },
    {
      name: "price",
      title: "Preço",
      type: "number",
    },
    {
      name: "discount",
      title: "Desconto",
      type: "number",
    },
    {
      name: "color",
      title: "Cor",
      type: "string",
    },
    {
      name: "desc",
      title: "descrição",
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
      name: "image",
      title: "Imagem",
      type: "image",
    },
    {
      name: "cover_image",
      title: "Iamgem de fundo",
      type: "image",
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
    },
    
    {
      name: "playes",
      title: "Número de jogadore",
      type: "number",
    },
    {
      name: "online",
      title: "Online",
      type: "boolean",
    },
    {
      name: "studio",
      title: "Studio",
      type: "string",
    },
    {
      name: "psn",
      title: "Playstation plus",
      type: "string",
    },
    {
      name: "avalible",
      title: "Disponivel par",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "violance",
      title: "PG",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      title: 'Categoria',
      name: 'category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'categorys' }]
        }
      ]
    },
    
    {
      name: "payment",
      title: "Pagamento",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "type",
      title: "Tipo de producto",
      type: "string",
    },
    {
      name: "videos",
      title: "Url do video",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: 'video_file',
      title: 'ficheiro',
      type: 'file',
    },
    {
      name: 'game_info',
      type: 'reference',
      description: 'Informaçao',
      to: [{ type: 'product_info' }]
    },
    {
      name: 'capas',
      type: 'reference',
      to: [{ type: 'skins' }]
    },
  ],
})
