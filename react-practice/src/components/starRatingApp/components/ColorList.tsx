import Color from "./Color";

export default function ColorList({
	colors = [],
	onRemoveColor = (f: any) => f,
	onRateColor = (f: any) => f,
}: any) {
	if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

	return (
		<div>
			{colors.map((color: any) => {
				return (
					<Color
						key={color.id}
						{...color}
						onRemove={onRemoveColor}
						onRate={onRateColor}
					/>
				);
			})}
		</div>
	);
}
