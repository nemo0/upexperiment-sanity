import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (metadata | twitter | social handles)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description (metadata)',
      type: 'text',
    }),
    defineField({
      name: 'url',
      title: 'Url (canonical | metadata | metadataBase)',
      type: 'url',
    }),
    defineField({
      name: 'openGraphImage',
      title: 'OpenGraphImage (metadata image)',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email (contact)',
      type: 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'Dashtower',
    },
  },
})
