import { ReactNode } from "react";

export function SlideNav({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div style={{ position: "absolute", display: "flex", gap: "10px" }}>
			{children}
		</div>
	);
}

export function SlideNavItem({
	isCurrent,
	onClick,
}: {
	isCurrent: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
	const styles = {
		btn: {
			borderRadius: "50%",
			width: "20px",
			height: "20px",
			backgroundColor: isCurrent ? "white" : "gray",
		},
	};

	return (
		<button
			style={styles.btn}
			onClick={onClick}
		></button>
	);
}
