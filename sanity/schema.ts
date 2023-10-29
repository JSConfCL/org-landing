import { type SchemaTypeDefinition } from "sanity";

import status from "./schemas/status";
import donor from "./schemas/donor";
import eventInstance from "./schemas/eventInstance";
import eventType from "./schemas/eventType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, eventInstance, status, donor],
};
