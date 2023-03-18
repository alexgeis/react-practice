import { useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";
import CarouselWrapper from "./components/CarouselWrapper";
import { Controls, IconButton } from "./components/Controls";
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
			<Controls>
				{/* PLAY / PAUSE */}
				{false ? (
					<IconButton
						aria-label="Pause"
						onClick={() => {}}
						children={<FaPause />}
					/>
				) : (
					<IconButton
						aria-label="Play"
						onClick={() => {}}
						children={<FaPlay />}
					/>
				)}
				{/* BACKWARD */}
				<IconButton
					aria-label="Previous Slide"
					onClick={() => {
						setCurrentIndex(
							(currentIndex - 1 + imgData.length) % imgData.length
						);
					}}
					children={<FaBackward />}
				/>
				{/* FORWARD */}
				<IconButton
					aria-label="Next Slide"
					onClick={() => {
						setCurrentIndex((currentIndex + 1) % imgData.length);
					}}
					children={<FaForward />}
				/>
			</Controls>
			<ProgressBar></ProgressBar>
		</CarouselWrapper>
	);
}
