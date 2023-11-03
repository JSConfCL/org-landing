import { type SchemaTypeDefinition } from "sanity";

export default {
  name: "eventInstance",
  type: "document",
  title: "Event Instance",
  fields: [
    {
      title: "Event Type",
      name: "eventType",
      type: "reference",
      to: [{ type: "eventType" }],
    },
    {
      title: "Merged Title",
      name: "mergedTitle",
      type: "boolean",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "startDate",
      type: "date",
      title: "Start Date",
    },
    {
      name: "endDate",
      type: "date",
      title: "End Date",
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
    },
    {
      name: "url",
      type: "string",
      title: "URL",
    },
  ],
} satisfies SchemaTypeDefinition;
