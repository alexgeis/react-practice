import { useState } from "react";
import useInterval from "./hooks/useInterval";

export default function CountdownTimer({ countdownAmt = 10 }) {
	let [count, setCount] = useState(countdownAmt);

	useInterval(() => {
		// Your custom logic here
		if (count == 0) return;
		setCount(count - 1);
	}, 1000);

	return <h1>{count}</h1>;
}
