export const getTotalAmount = (items: { price: number; quantity: number }[]) => {
	return items.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
};
export const getCheckoutButtonLabel = (price: string) => `Go checkout ${price}`;
