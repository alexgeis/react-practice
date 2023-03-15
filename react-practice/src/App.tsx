import "./App.css";
import QuizForm from "./components/QuizForm";
import RatingApp from "./components/starRatingApp/RatingApp";
import ToDoApp from "./components/ToDoList/ToDoApp";

function App() {
	return (
		<div className="App">
			<QuizForm />
			<RatingApp />
			<ToDoApp />
		</div>
	);
}

export default App;
