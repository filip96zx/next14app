import clsx from "clsx";
import "./start.css";
type TProps = {};

export const Rating = ({}: TProps) => {
	// const className = `before:bg-gradient-to-r before:from-yellow-500 before:from-[${
	// 	(4.3 / 5) * 100
	// }%]  before:to-gray-300 before:to-[${(4.3 / 5) * 100}%]`;
	// const className = `before:bg-gradient-to-r before:from-yellow-900 before:via-yellow-400 before:to-gray-100 `;
	return (
		<>
			<p>Rate the product:</p>
			<div className="flex flex-row-reverse justify-end">
				<input className="radio-input" type="radio" id="star5" name="star-input" value="5" />
				<label className="radio-label" htmlFor="star5" title="5 stars">
					5 stars
				</label>

				<input className="radio-input" type="radio" id="star4" name="star-input" value="4" />
				<label className="radio-label" htmlFor="star4" title="4 stars">
					4 stars
				</label>

				<input className="radio-input" type="radio" id="star3" name="star-input" value="3" />
				<label className="radio-label" htmlFor="star3" title="3 stars">
					3 stars
				</label>

				<input className="radio-input" type="radio" id="star2" name="star-input" value="2" />
				<label className="radio-label" htmlFor="star2" title="2 stars">
					2 stars
				</label>

				<input className="radio-input" type="radio" id="star1" name="star-input" value="1" />
				<label className="radio-label" htmlFor="star1" title="1 star">
					1 star
				</label>
			</div>
			<p>
				Product rating:{" "}
			</p>
		</>
	);
};
