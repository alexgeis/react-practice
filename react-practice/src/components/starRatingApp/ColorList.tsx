import Color from "./Color";

export default function ColorList({ colors = [] }: any) {
	if (!colors.length) return <div>No Colors Listed.</div>;

	return (
		<div>
			{colors.map((color: any) => {
				return (
					<Color
						key={color.id}
						{...color}
					/>
				);
			})}
		</div>
	);
}
