import { useEffect, useRef } from "react";

// for more detail, visit: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export default function useInterval(callback: any, delay: any) {
	const savedCallback = useRef<any>();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}
