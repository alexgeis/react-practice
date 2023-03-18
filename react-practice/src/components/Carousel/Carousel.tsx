import { useState } from "react";
import CarouselWrapper from "./components/CarouselWrapper";
import Controls from "./components/Controls";
import ProgressBar from "./components/ProgressBar";
import { SlideNavItem, SlideNav } from "./components/SlideNav";
import { Slide, Slides } from "./components/Slides";
// data
import { imgData } from "./data/imgData";

export default function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<CarouselWrapper aria-label="Carousel Images">
			<Slides>
				{imgData.map((image, index) => (
					<Slide
						key={index}
						id={`image-${index}`}
						image={image.imgInfo}
						title={image.title}
						isCurrent={index === currentIndex}
						takeFocus={null}
						children={image.content}
					/>
				))}
			</Slides>
			<SlideNav>
				{imgData.map((slide, index) => (
					<SlideNavItem
						key={index}
						isCurrent={index === currentIndex}
						aria-label={`Slide ${index + 1}`}
						onClick={() => {}}
					/>
				))}
			</SlideNav>
			<Controls></Controls>
			<ProgressBar></ProgressBar>
		</CarouselWrapper>
	);
}
