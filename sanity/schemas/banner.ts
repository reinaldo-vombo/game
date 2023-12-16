import { defineType } from "sanity"

export const banner = defineType({
  name: "banner",
  title: "Hero-section",
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
      title: "Tipo de produto",
      type: "string",
    },
    {
      name: "platforme",
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
      name: 'video_file',
      title: 'ficheiro',
      type: 'file',
    },
  ],
})
