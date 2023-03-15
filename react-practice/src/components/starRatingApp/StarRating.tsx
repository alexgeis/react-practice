import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
	return (
		<>
			{createArray(totalStars).map((n, i) => (
				<Star
					key={i}
					selected={selectedStars > i}
				/>
			))}
			<p>
				{selectedStars} of {totalStars} stars
			</p>
		</>
	);
}

const Star = ({ selected = false }) => (
	<FaStar color={selected ? "red" : "grey"} />
);

const createArray = (length: number) => [...Array(length)];
