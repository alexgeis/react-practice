import React from "react";
import CarouselWrapper from "./components/CarouselWrapper";
import Controls from "./components/Controls";
import ProgressBar from "./components/ProgressBar";
import SlideNav from "./components/SlideNav";
import { Slide, Slides } from "./components/Slides";
// data
import { imgData } from "./data/imgData";

export default function Carousel() {
	let currentIndex = 0;

	return (
		<CarouselWrapper aria-label="Carousel Images">
			<Slides>
				{imgData.map((image, index) => {
					return (
						<Slide
							key={index}
							id={`image-${index}`}
							image={image.imgInfo}
							title={image.title}
							isCurrent={index === currentIndex}
							takeFocus={null}
							children={image.content}
						/>
					);
				})}
			</Slides>
			<SlideNav></SlideNav>
			<Controls></Controls>
			<ProgressBar></ProgressBar>
		</CarouselWrapper>
	);
}
