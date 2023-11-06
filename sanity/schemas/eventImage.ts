import { type SchemaTypeDefinition } from "sanity";

export default {
  name: "eventImage",
  type: "document",
  title: "Event Image",
  fields: [
    {
      name: "externalId",
      title: "External ID",
      type: "string",
      validation: (Rule) => {
        return Rule.required().unique();
      },
    },
    {
      name: "externalURL",
      title: "External URL",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      title: "Event Instance",
      name: "eventInstance",
      type: "reference",
      to: [{ type: "eventInstance" }],
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (Rule) => {
        return Rule.required();
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
        {
          name: "date",
          type: "date",
          title: "Date",
        },
      ],
    },
    {
      name: "url",
      type: "string",
      title: "URL",
    },
  ],
} satisfies SchemaTypeDefinition;
