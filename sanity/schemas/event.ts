import { type SchemaTypeDefinition } from "sanity";

export default {
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    {
      title: "Project",
      name: "project",
      type: "reference",
      to: [{ type: "project" }],
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "startDate",
      type: "date",
      title: "Start Date",
      validation: (Rule) => Rule.required(),
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
      name: "galleryEnabled",
      type: "boolean",
      title: "Habilitado para galería",
      description:
        "Habilita este evento para aparecer en la galería de imágenes",
      validation: (Rule) => Rule.required(),
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
  initialValue: {
    galleryEnabled: true,
  },
} satisfies SchemaTypeDefinition;
