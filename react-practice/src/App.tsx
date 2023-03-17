import "./App.css";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import QuizForm from "./components/QuizForm/QuizForm";
import RatingApp from "./components/starRatingApp/RatingApp";
import ToDoApp from "./components/ToDoList/ToDoApp";

/* 
	nav bar for different pages

	render grid of available pages

	if clicked, the grid will get the index and render that page
*/

function App() {
	return (
		<div className="App">
			<CountdownTimer countdownAmt={100} />
			<br />
			<ToDoApp />
			<br />
			<QuizForm />
			<br />
			<RatingApp />
			<br />
		</div>
	);
}

export default App;
