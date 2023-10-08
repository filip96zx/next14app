import { redirect } from "next/navigation";
import Link from "next/link";
import { getCartDetailByCookiesCartId } from "@/app/services/cart.service";
import { CartProductActions } from "@/app/ui/molecules/CartProductActions";
import { parseMoney } from "@/app/utils";
import { Button } from "@/app/ui/atoms/buttons";
import { PageHeader } from "@/app/ui/atoms/PageHeader";

export default async function CartPage() {
	const cart = await getCartDetailByCookiesCartId();
	if (!cart) {
		redirect("/");
	}
	return (
		<div>
			<PageHeader>Cart</PageHeader>

			<div className="flex flex-col gap-10">
				<table className="table-fixed text-center">
					<thead>
						<tr>
							<th>Product</th>
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
									<td>{`${i.name} (${i.variantName})`}</td>
									<td>{parseMoney(i.price)}</td>
									<td>{i.quantity}</td>
									<td>{parseMoney(i.price * i.quantity)}</td>
									<td className="float-right">
										<CartProductActions orderItem={i} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className="flex flex-row-reverse">
					<Link href="/payment">
						<Button variant="primary">Go checkout</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
