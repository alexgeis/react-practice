/// <reference types="vite/client" />

type ImgInfoProps = {
	src: string;
	alt: string;
};
type ImgProps = {
	imgInfo: ImgInfoProps;
	title: string;
	content: string;
};
type SlideProps = {
	id: string;
	image: ImgInfoProps;
	title: string;
	isCurrent: boolean;
	takeFocus: null | boolean;
	children?: ReactNode;
};
