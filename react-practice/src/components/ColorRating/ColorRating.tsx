import { useState } from "react";
import ColorList from "./components/ColorList";
import colorData from "./data/dataSet.json";

export default function RatingApp() {
	const [colors, setColors] = useState(colorData);
	return (
		<>
			<h1>Color Star Ratings</h1>
			<ColorList
				colors={colors}
				onRemoveColor={(id: any) => {
					const newColors = colors.filter((color: any) => color.id !== id);
					setColors(newColors);
				}}
				onRateColor={(id: any, rating: any) => {
					const newColors = colors.map((color: any) => {
						return color.id === id ? { ...color, rating } : color;
					});
					console.log(newColors);
					setColors(newColors);
				}}
			/>
		</>
	);
}
