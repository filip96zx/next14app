import { parseMoney } from "@/app/utils";
import { type ProductListItemFragment } from "@/gql/graphql";

type TProps = {
	product: ProductListItemFragment;
};

export const ProductDetailsDescription = ({ product: { categories, name, price } }: TProps) => {
	const categoryName = categories?.[0]?.name;
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					{categoryName && (
						<>
							<span className="sr-only">Category:</span> {categoryName}
						</>
					)}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{parseMoney(price / 100)}</p>
		</div>
	);
};
