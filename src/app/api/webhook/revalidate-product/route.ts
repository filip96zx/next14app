import { type NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTags, getTagToRevalidate } from "@/app/models";

export async function POST(request: NextRequest): Promise<Response> {
	const data: unknown = await request.json();
	if (
		data &&
		typeof data === "object" &&
		"productId" in data &&
		data.productId &&
		typeof data.productId === "string"
	) {
		revalidateTag(getTagToRevalidate({ tag: RevalidateTags.PRODUCT, param: data.productId }));
		revalidateTag(RevalidateTags.PRODUCT_LIST);
		return new Response(null, { status: 204 });
	}
	return new Response("Invalid productId", { status: 400 });
}
