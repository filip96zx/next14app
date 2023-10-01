import { redirect } from "next/navigation";
import { getCartDetailByCookiesCartId } from "@/app/services/cart.service";
import { ProductQuantityChangeInput } from "@/app/ui/molecules/ProductQuatitiyChangeInput";
import { parseMoney } from "@/app/utils";

export default async function CartPage() {
	const cart = await getCartDetailByCookiesCartId();
	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Cart</h1>

			<table className="table-fixed text-center">
				<thead>
					<tr>
						<th>Product</th>
						<th>variant</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart?.items?.map((i) => {
						return (
							<tr key={i.variantName + i.name}>
								<td>{i.name}</td>
								<td>{i.variantName}</td>
								<td>{parseMoney(i.price)}</td>
								<td>{i.quantity}</td>
								<td>{parseMoney(i.price * i.quantity)}</td>
								<td>
									<ProductQuantityChangeInput orderItem={i} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
		</div>
	);
}
