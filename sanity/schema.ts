import { type SchemaTypeDefinition } from "sanity";

import eventInstance from "./schemas/eventInstance"
import eventType from './schemas/eventType'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [eventType, eventInstance]
  };
  