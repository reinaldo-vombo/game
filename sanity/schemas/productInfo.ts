import { defineType } from "sanity"

export const productInfo = defineType({
  name: "product_info",
  title: "Informação do producto",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titlo",
      type: "string",
    },
    {
      title: 'Tab Set',
      name: 'tabSet',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tab',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Images',
              name: 'images',
              type: 'array',
              of: [{ type: 'image' }], // Assuming image URLs are strings
            },
            {
              title: 'Type',
              name: 'type',
              type: 'string',
            },
            {
              title: 'Description',
              name: 'desc',
              type: 'text',
            },
          ],
        },
      ],
    }
  ],
})
