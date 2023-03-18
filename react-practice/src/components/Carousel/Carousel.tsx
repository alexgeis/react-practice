import React from "react";
import CarouselWrapper from "./components/CarouselWrapper";
import Controls from "./components/Controls";
import ProgressBar from "./components/ProgressBar";
import SlideNav from "./components/SlideNav";
import { Slide, Slides } from "./components/Slides";

const slides = [
	{
		src: "http://placekitten.com/200/300",
		title: "title",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quod.",
	},
	{
		src: "http://placekitten.com/200/301",
		title: "title",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quod.",
	},
	{
		src: "http://placekitten.com/201/300",
		title: "title",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quod.",
	},
];

export default function Carousel() {
	let currentIndex = 0;

	return (
		<CarouselWrapper aria-label="Carousel Images">
			<Slides>
				{slides.map((image, index) => {
					<Slide
						key={index}
						id={`image-${index}`}
						imageSrc={image.src}
						title={image.title}
						isCurrent={index === currentIndex}
						takeFocus={null}
						children={image.content}
					/>;
				})}
			</Slides>
			<SlideNav></SlideNav>
			<Controls></Controls>
			<ProgressBar></ProgressBar>
		</CarouselWrapper>
	);
}
