import "./App.css";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import QuizForm from "./components/QuizForm";
import RatingApp from "./components/starRatingApp/RatingApp";
import ToDoApp from "./components/ToDoList/ToDoApp";

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
