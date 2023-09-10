import { ProductList } from "@/app/ui/organisms/ProductList";
import { type TProduct } from "@/app/ui/types";

const products: Array<TProduct> = [
	{
		id: "1",
		category: "elektronika",
		name: "Iphone",
		price: 10000,
		image: {
			alt: "iphone",
			src: "/phone.jpg",
		},
	},
	{
		id: "2",
		category: "gadżety",
		name: "Okulary",
		price: 1000,
		image: {
			alt: "okulary",
			src: "/sunglasses.jpg",
		},
	},
	{
		id: "3",
		category: "elektronika",
		name: "Słuchawki",
		price: 5000,
		image: {
			alt: "słuchawki",
			src: "/headphones.jpg",
		},
	},
	{
		id: "4",
		category: "elektronika",
		name: "Smart watch",
		price: 2000,
		image: {
			alt: "smart watch",
			src: "/smart-watch.jpg",
		},
	},
];

export default function ProductsPage() {
	return <ProductList products={products} />;
}
