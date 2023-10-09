import { Suspense } from "react";
import { ReviewListItem } from "@/app/ui/molecules/review/ReviewListItem";
import { getRatingListByProductId } from "@/api";

type TProps = {
	productId: string;
};

export const ReviewList = async ({ productId }: TProps) => {
	const ratings = await getRatingListByProductId({ first: 4, where: { productId: productId } });
	return (
		<Suspense fallback={<div>loading...</div>}>
			<ul className='flex flex-col gap-10'>
				{ratings.reverse().map((r, index) => (
					<ReviewListItem key={index} rating={r} />
				))}
			</ul>
		</Suspense>
	);
};
