import React, { ReactNode } from "react";

export function Slides({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div style={{ position: "relative", width: "100%", height: "100%" }}>
			{children}
		</div>
	);
}

export function Slide({
	id,
	image,
	title,
	isCurrent,
	takeFocus,
	children,
}: SlideProps): JSX.Element {
	return (
		<>
			<div id={id}>
				<img
					src={image.src}
					alt={image.alt}
				/>

				<div className="content">
					<p>{title}</p>
					<p>{children}</p>
				</div>
			</div>
		</>
	);
}
