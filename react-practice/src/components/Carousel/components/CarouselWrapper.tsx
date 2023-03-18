import { ReactNode } from "react";

export default function CarouselWrapper({
	children,
}: {
	children: ReactNode;
}): JSX.Element {
	return (
		<div
			style={{
				width: "900px",
				position: "relative",
			}}
		>
			{children}
		</div>
	);
}
