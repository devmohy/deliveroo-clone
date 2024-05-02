export default {
  name: 'featured',
  title: 'Featured menu categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'resturants',
      title: 'Resturants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'resturant'}]}],
      validation: (Rule) => Rule.required(),
    },
  ],
}