import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    {
      title: 'Social Handles',
      name: 'socials',
      type: 'object',
      fields: [
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'twitter', type: 'url', title: 'Twitter'},
        {name: 'facebook', type: 'url', title: 'Facebook'},
        {name: 'github', type: 'url', title: 'Github'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn'},
        {name: 'website', type: 'url', title: 'Other Website'},
      ],
    },
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),

    // defineField({
    //   name: 'instagram',
    //   title: 'Instagram',
    //   type: 'url',
    // }),
    // defineField({
    //   name: 'twitter',
    //   title: 'Twitter',
    //   type: 'url',
    // }),
    // defineField({
    //   name: 'facebook',
    //   title: 'Facebook',
    //   type: 'url',
    // }),
    // defineField({
    //   name: 'linkedin',
    //   title: 'LinkedIn',
    //   type: 'url',
    // }),
    // defineField({
    //   name: 'github',
    //   title: 'Github',
    //   type: 'url',
    // }),
    // defineField({
    //   name: 'website',
    //   title: 'Other Website',
    //   type: 'url',
    // }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
