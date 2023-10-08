import { redirect } from "next/navigation";
import { getCartDetailByCookiesCartId } from "@/app/services/cart.service";
import { StripeForm } from "@/app/ui/checkout-form/StripeForm";
import { StripeInstance } from "@/app/services/stripe.service";

export default async function PaymentPage() {
	const cart = await getCartDetailByCookiesCartId();
	if (!cart) {
		redirect("/");
	}

	const stripe = StripeInstance();

	const totalAmount = cart.items.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: totalAmount,
		currency: "usd",
		automatic_payment_methods: {
			enabled: true,
		},
		metadata: {
			orderId: cart.id,
		},
	});

	if (!paymentIntent.client_secret) {
		throw new Error("Missing client_secret");
	}

	return <StripeForm clientSecret={paymentIntent.client_secret} amount={totalAmount} />;
}
