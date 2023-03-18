import { ReactNode } from "react";

export function Controls({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div
			style={{
				position: "absolute",
				bottom: "0",
				right: "0",
				display: "flex",
				gap: "10px",
			}}
		>
			{children}
		</div>
	);
}

export function IconButton({
	onClick,
	children,
}: {
	children: ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
	return <button onClick={onClick}>{children}</button>;
}
