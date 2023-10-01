import { redirect } from "next/navigation";
import { getCartDetailByCookiesCartId } from "@/app/services/cart";

export default async function CartPage() {
	const cart = await getCartDetailByCookiesCartId();
	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Cart</h1>

			<table className="table-auto">
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{cart?.items?.map((lineItem) => {
						return (
							<tr key={lineItem.id}>
								<td>{lineItem.name}</td>
								<td>{lineItem.price}</td>
								<td>{lineItem.quantity}</td>
								<td>{lineItem.price * lineItem.quantity}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
		</div>
	);
}
