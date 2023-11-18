import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      title: 'Color',
      description: 'Pick color',
      name: 'color',
      type: 'string',
      options: {
        list: [
          {title: 'Green', value: 'green'},
          {title: 'Blue', value: 'blue'},
          {title: 'Orange', value: 'orange'},
          {title: 'Purple', value: 'purple'},
          {title: 'Pink', value: 'pink'},
          {title: 'Red', value: 'red'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
