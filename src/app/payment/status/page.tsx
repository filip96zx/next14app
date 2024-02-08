import type Stripe from "stripe";
import { Check, Hourglass, XCircle } from "lucide-react";
import { StripeInstance } from "@/services/stripe.service";
import { PageHeader } from "@/ui/atoms/PageHeader";

type TProps = { searchParams: { payment_intent?: string } };

export default async function PaymentStatusPage({ searchParams: { payment_intent } }: TProps) {
	const stripe = StripeInstance();
	if (!payment_intent) {
		throw new Error("Missing payment_intent");
	}
	const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent);

	const iconClassName = "inline-block w-7";

	const icons: { [key in Stripe.PaymentIntent.Status]: JSX.Element | null } = {
		processing: <Hourglass className={iconClassName} />,
		canceled: <XCircle className={iconClassName} />,
		succeeded: <Check className={iconClassName} />,
		requires_action: null,
		requires_capture: null,
		requires_confirmation: null,
		requires_payment_method: null,
	};
	return (
		<div>
			<PageHeader>Payment Status</PageHeader>
			<section>
				<span>Status: </span>
				<span aria-label="payment status">{paymentIntent.status}</span>
				{icons[paymentIntent.status]}
			</section>
		</div>
	);
}
