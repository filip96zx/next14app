export const parseMoney = (price: number) => {
	return Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(price);
};
