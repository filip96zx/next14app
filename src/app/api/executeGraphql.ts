import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables?: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL is not defined");
	}
	const response = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, variables }),
	});

	type GraphqlResponse<T> =
		| {
				data: T;
				errors?: undefined;
		  }
		| { data?: undefined; errors: Array<{ message: string }> };

	const graphqlResponse = (await response.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new TypeError(`GraphQL error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
