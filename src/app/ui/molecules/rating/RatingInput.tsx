import classes from "./rating-input.module.css";
import { Label } from "@/app/ui/atoms/inputs";
type TProps = { name: string };

export const RatingInput = ({ name }: TProps) => {
	return (
		<Label content="Rate the product:">
			<div className="flex flex-row-reverse justify-end">
				<input
					className={classes.radioInput}
					type="radio"
					id="star5"
					name={name}
					value="5"
					required
				/>
				<label className={classes.radioLabel} htmlFor="star5" title="5 stars">
					5 stars
				</label>

				<input
					className={classes.radioInput}
					type="radio"
					id="star4"
					name={name}
					value="4"
					required
				/>
				<label className={classes.radioLabel} htmlFor="star4" title="4 stars">
					4 stars
				</label>

				<input
					className={classes.radioInput}
					type="radio"
					id="star3"
					name={name}
					value="3"
					required
				/>
				<label className={classes.radioLabel} htmlFor="star3" title="3 stars">
					3 stars
				</label>

				<input
					className={classes.radioInput}
					type="radio"
					id="star2"
					name={name}
					value="2"
					required
				/>
				<label className={classes.radioLabel} htmlFor="star2" title="2 stars">
					2 stars
				</label>

				<input
					className={classes.radioInput}
					type="radio"
					id="star1"
					name={name}
					value="1"
					required
				/>
				<label className={classes.radioLabel} htmlFor="star1" title="1 star">
					1 star
				</label>
			</div>
		</Label>
	);
};
