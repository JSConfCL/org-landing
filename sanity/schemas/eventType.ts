import { type SchemaTypeDefinition } from "sanity";

export default {
  name: "eventType",
  type: "document",
  title: "Event Type",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bgColor",
      type: "string",
      title: "Background Color",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
} as SchemaTypeDefinition;
