import { ReactNode } from "react";

export function SlideNav({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div style={{ position: "absolute", display: "flex", gap: "10px" }}>
			{children}
		</div>
	);
}
