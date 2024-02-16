import { type SchemaTypeDefinition } from "sanity";

import status from "./schemas/status";
import donor from "./schemas/donor";
import eventImage from "./schemas/eventImage";
import event from "./schemas/event";
import project from "./schemas/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, event, status, donor, eventImage],
};
