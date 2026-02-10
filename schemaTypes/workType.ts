import {defineField, defineType} from 'sanity'

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'color',
      type: 'string',
      options: {
        list: [
          {title: 'Terracotta', value: 'terracotta'},
          {title: 'Shamrock', value: 'shamrock'},
          {title: 'Red', value: 'red'},
          {title: 'Pink', value: 'pink'},
          {title: 'Bold Blue', value: 'bold-blue'},
          {title: 'Sky Blue', value: 'sky-blue'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Camel', value: 'camel'},
          {title: 'Grape', value: 'grape'},
          {title: 'Pink', value: 'pink'},
        ],
      },
    }),
    defineField({name: 'hidden', type: 'boolean', title: 'Hidden', initialValue: false}),
    defineField({name: 'featured', type: 'boolean', title: 'Featured Work', initialValue: false}),
    defineField({name: 'year', type: 'number', title: 'Year Built'}),
    defineField({name: 'cardTop', type: 'string', title: 'Card Top'}),
    defineField({name: 'cardBottom', type: 'string', title: 'Card Bottom'}),
    defineField({name: 'url', type: 'url', title: 'Project URL'}),
    defineField({
      name: 'company',
      type: 'reference',
      to: [{type: 'company'}],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'image', type: 'image'}),
            defineField({name: 'landscape', type: 'boolean'}),
          ],
        },
      ],
    }),
  ],
})
