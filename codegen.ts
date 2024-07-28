import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:8080",
  documents: "src/services/graphql/requests/**/*.ts",
  generates: {
    "src/services/graphql/generated.tsx": {
      // preset: "client",
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
    },
  },
};

export default config;
