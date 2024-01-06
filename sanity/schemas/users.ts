import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'Usuarios',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'password',
      title: 'Palavra-pass',
      type: 'string',
    }),
    defineField({
      name: 'token',
      title: 'JWT Token',
      type: 'string', 
      readOnly: true, 
    }),
    defineField({
      name: 'image',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})