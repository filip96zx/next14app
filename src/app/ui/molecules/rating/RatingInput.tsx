import classes from "./rating-input.module.css";
import { Label } from "@/app/ui/atoms/inputs";
type TProps = { name: string };

export const RatingInput = ({}: TProps) => {
	return (
		<Label content="Rate the product:">
			<div className="flex flex-row-reverse justify-end">
				<input
					className={classes.radioInput}
					type="radio"
					id="star5"
					name="star-input"
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
					name="star-input"
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
					name="star-input"
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
					name="star-input"
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
					name="star-input"
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
