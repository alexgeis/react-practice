import { useState, useEffect } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";

type PanelProps = {
	title: string;
	children?: React.ReactNode;
	isActive: boolean;
	onShow: () => void;
};

export default function Accordion(): JSX.Element {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const width1000: boolean = useMediaQuery("(max-width: 1000px)");
	const width767: boolean = useMediaQuery("(max-width: 767px)");

	return (
		<section
			style={
				width767
					? accordionStyle.container("315px")
					: width1000
					? accordionStyle.container("666px")
					: accordionStyle.container("900px") // width for screens > 1000px
			}
		>
			<h2>Almaty, Kazakhstan</h2>
			<Panel
				title="About"
				isActive={activeIndex === 0}
				onShow={() => setActiveIndex(0)}
			>
				With a population of about 2 million, Almaty is Kazakhstan's largest
				city. From 1929 to 1997, it was its capital city.
			</Panel>
			<Panel
				title="Etymology"
				isActive={activeIndex === 1}
				onShow={() => setActiveIndex(1)}
			>
				The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
				"apple" and is often translated as "full of apples". In fact, the region
				surrounding Almaty is thought to be the ancestral home of the apple, and
				the wild <i lang="la">Malus sieversii</i> is considered a likely
				candidate for the ancestor of the modern domestic apple.
			</Panel>
		</section>
	);
}

const accordionStyle = {
	container: (width: string): any => ({
		width: width,
		margin: "0 auto",
		backgroundColor: "#9c1ce6",
		WebkitBoxShadow: "-8px 10px 5px 0px rgba(255,255,255,1)",
		MozBoxShadow: "-8px 10px 5px 0px rgba(255,255,255,1)",
		boxShadow: "-8px 10px 5px 0px rgba(255,255,255,1)",
	}),
};

function Panel({ title, children, isActive, onShow }: PanelProps): JSX.Element {
	return (
		<section style={panelStyle.container}>
			<h3>{title}</h3>
			{isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
		</section>
	);
}

const panelStyle = {
	container: {
		border: "1px white solid",
		padding: "20px 4px",
		// backgroundColor: "#9c1ce6",
	},
};
