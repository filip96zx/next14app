import { type TProduct } from "@/app/types";
import { parseMoney } from "@/app/utils";

type TProps = {
	product: TProduct;
};

export const ProductListItemDescription = ({ product: { category, name, price } }: TProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{parseMoney(price / 100)}</p>
		</div>
	);
};
