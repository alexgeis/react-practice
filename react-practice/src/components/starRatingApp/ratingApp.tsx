import { useState } from "react";
import ColorList from "./ColorList";
import colorData from "./dataSet.json";

export default function ratingApp() {
	const [colors] = useState(colorData);
	return <ColorList colors={colors} />;
}
