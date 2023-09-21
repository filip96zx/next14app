import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.GRAPHQL_URL,
	documents: "src/graphql/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			config: {
				useTypeImports: true,
				defaultScalarType: "unknown",
				skipTypename: true,
				documentMode: "string",
			},
			presetConfig: {
				fragmentMasking: false,
			},
			plugins: [],
		},
	},
};

export default config;
