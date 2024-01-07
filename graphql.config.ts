import type { IGraphQLConfig } from "graphql-config";

const projectId = "t2zgeg0i"
const dataset = "migration"

const config: IGraphQLConfig = {
  schema: `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`,
  documents: ["src/**/*.gql"],
};

export default config;
