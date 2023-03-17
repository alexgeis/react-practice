import React, { useState } from "react";

const navStyles: any = {
	btn: {
		color: "black",
		textAlign: "center",
	},
};

export default function NavBar({
	navItems,
	activeIndex,
	setActiveIndex = (f: any) => f,
}: any) {
	return (
		<>
			{navItems.map((navItem: any, i: number) => {
				return (
					<button
						key={i}
						onClick={() => setActiveIndex(i)}
						style={
							activeIndex === i
								? { backgroundColor: "purple", color: "white" }
								: { backgroundColor: "white", color: "black" }
						}
					>
						{navItem.title}
					</button>
				);
			})}
		</>
	);
}
