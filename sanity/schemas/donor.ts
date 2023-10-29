import { type SchemaTypeDefinition } from "sanity";

export default {
  name: "donor",
  type: "document",
  title: "A Donor",
  fields: [
    {
      title: "Donor Name",
      description:
        "El nombre q se usará en el sitio público para identificar al donante",
      name: "name",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      title: "Donor Status",
      name: "status",
      type: "reference",
      to: [{ type: "status" }],
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "discordUsername",
      type: "string",
      title: "Discord Username",
    },
    {
      name: "githubUsername",
      type: "string",
      title: "Github Username",
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        metadata: ["blurhash", "lqip", "palette"],
        hotspot: true,
      },
      validation: (Rule) => {
        return Rule.required();
      },
    },
  ],
} satisfies SchemaTypeDefinition;
