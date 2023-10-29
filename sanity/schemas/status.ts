import { type SchemaTypeDefinition } from "sanity";

export default {
  name: "status",
  type: "document",
  title: "Status",
  fields: [
    {
      title: "Key",
      name: "key",
      type: "slug",
    },
    {
      name: "statusName",
      type: "string",
      title: "Status Name",
      description: "Descriptive name of the status",
    },
  ],
} satisfies SchemaTypeDefinition;
