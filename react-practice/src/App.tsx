import { useEffect, useState } from "react";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import NavBar from "./components/NavBar/NavBar";
// COMPONENTS
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import ColorRating from "./components/ColorRating/ColorRating";
import QuizForm from "./components/QuizForm/QuizForm";
import Accordion from "./components/Accordion/Accordion";

import ToDoApp from "./components/ToDoList/ToDoApp";

const NavComponents: any = [
	{
		element: <CountdownTimer countdownAmt={100} />,
		title: "Countdown Timer",
	},
	{
		element: <ToDoApp />,
		title: "ToDo Demo",
	},
	{
		element: <QuizForm />,
		title: "Quiz Form",
	},
	{
		element: <ColorRating />,
		title: "Color Rating App",
	},
	{
		element: <Accordion />,
		title: "Accordion",
	},
];

function App() {
	const [navItems] = useState(NavComponents);
	const [activeIndex, setActiveIndex] = useLocalStorage("navIndex", 0);

	return (
		<main className="App">
			<NavBar
				navItems={navItems}
				activeIndex={activeIndex}
				setActiveIndex={(navId: number) => setActiveIndex(navId)}
			/>
			<section className="section-wrapper">
				{navItems[activeIndex].element}
			</section>
		</main>
	);
}

export default App;
