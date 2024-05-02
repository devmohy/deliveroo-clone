export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Resturant Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Resturant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Resturant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Resturant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Resturant Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter the rating from (1 to 5 stars)',
      validation: (Rule) => 
        Rule.required()
        .min(1)
        .max(5)
        .error('Rating must be between 1 and 5'),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}]
    },

  ],
}
