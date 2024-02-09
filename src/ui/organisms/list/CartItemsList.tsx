import { type CartDetailsFragment } from "@/gql/graphql";
import { CartProductActions } from "@/ui/molecules/CartProductActions";
import { parseMoney } from "@/utils";

export function CartItemsList({
	cart,
	disableEditQuantity,
}: {
	cart: CartDetailsFragment;
	disableEditQuantity?: boolean;
}) {
	return (
		<table className="table-fixed text-center">
			<thead>
				<tr className="bg-slate-100 text-lg">
					<th>Product</th>
					<th>Price</th>
					<th>Total</th>
					<th className="w-0">Quantity</th>
				</tr>
			</thead>
			<tbody>
				{cart?.items?.map((i) => {
					return (
						<tr key={i.variantName + i.name}>
							<td className="py-2 font-semibold">{`${i.name} (${i.variantName})`}</td>
							<td className="py-2">{parseMoney(i.price)}</td>
							<td className="py-2">{parseMoney(i.price * i.quantity)}</td>
							<td className="py-2">
								{disableEditQuantity ? i.quantity : <CartProductActions orderItem={i} />}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
