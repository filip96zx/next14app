/// <reference types="stripe-event-types" />
import { type Stripe } from "stripe";
import { type NextRequest } from "next/server";
import { StripeInstance } from "@/app/services/stripe.service";
import { updateOrderStatus } from "@/api/mutations";
import { OrderStatus } from "@/gql/graphql";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Missing STRIPE_WEBHOOK_SECRET env variable");
	}

	const stripe = StripeInstance();
	const signature = request.headers.get("stripe-signature");
	if (!signature) {
		return new Response("Invalid signature", { status: 400 });
	}
	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;
	switch (event.type) {
		case "payment_intent.succeeded":
			const orderId = event.data.object.metadata.orderId;
			console.log("payment_intent.succeeded", { orderId });
			if (!orderId) {
				return new Response("Invalid orderId", { status: 400 });
			}
			await updateOrderStatus({ id: orderId, status: OrderStatus.Paid });
			break;
		case "payment_intent.created":
			if (!orderId) {
				return new Response("Invalid orderId", { status: 400 });
			}
			await updateOrderStatus({ id: orderId, status: OrderStatus.Pending });
			console.log("checkout.session.completed", event.data.object);
			break;
		case "payment_intent.payment_failed":
			console.log("payment_intent.payment_failed", event.data.object);
			break;
		default:
			break;
	}
	return new Response(null, { status: 204 });
}
