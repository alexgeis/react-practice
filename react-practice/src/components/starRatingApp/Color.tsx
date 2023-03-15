import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

export default function Color({
	id,
	title,
	color,
	rating,
	onRemove = (f: any) => f,
	onRate = (f: any) => f,
}: any) {
	return (
		<section>
			<h1>{title}</h1>
			<button onClick={() => onRemove(id)}>
				<FaTrash />
			</button>
			<div style={{ height: 50, backgroundColor: color }} />
			<StarRating
				selectedStars={rating}
				onRate={(rating) => onRate(id, rating)}
			/>
		</section>
	);
}
