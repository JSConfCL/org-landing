export default {
  name: 'eventType',
  type: 'document',
  title: 'Event Type',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'

    },
    {
      name: 'bgColor',
      type: 'string',
      title: 'Background Color'

    },    
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ]
    },
  ]
}
