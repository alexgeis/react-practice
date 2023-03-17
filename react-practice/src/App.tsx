import { useEffect, useState } from "react";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import NavBar from "./components/NavBar/NavBar";
import QuizForm from "./components/QuizForm/QuizForm";
import RatingApp from "./components/starRatingApp/RatingApp";
import ToDoApp from "./components/ToDoList/ToDoApp";

/* 
	nav bar for different pages

	render grid of available pages

	if clicked, the grid will get the index and render that page
*/

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
		element: <RatingApp />,
		title: "Color Rating App",
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
