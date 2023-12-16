import { defineType } from "sanity"

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nome do produto",
      description: "The Title of the Product",
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
      name: "studio",
      title: "Studio",
      type: "string",
    },
    {
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizes",
      title: "Tamanhos",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "type",
      title: "Plataforma",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      title: "Descrição",
      type: "array",
      of: [{type: 'block'}],
    },
    {
      name: "currency",
      title: "moeda",
      type: "string",
    },
    {
      name: "price",
      title: "Preço",
      type: "number",
    },
    {
      name: "video",
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
      name: "content",
      title: "Conteúdo",
      type: "array",
      of: [{type: 'block'}]
    },
  ],
})
