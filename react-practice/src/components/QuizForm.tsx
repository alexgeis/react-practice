import { useState } from "react";

export default function QuizForm() {
	const [answer, setAnswer] = useState("");
	const [error, setError] = useState<any>(null);
	const [status, setStatus] = useState("typing");

	if (status === "success") {
		return <h1>That's right!</h1>;
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus("submitting");
		try {
			await submitForm(answer);
			setStatus("success");
		} catch (err) {
			setStatus("typing");
			setError(err);
		}
	}

	function handleTextareaChange(e: any) {
		setAnswer(e.target.value);
	}

	return (
		<>
			<h2>City quiz</h2>
			<p>Who was the first woman to win a Nobel Prize?</p>
			<form onSubmit={handleSubmit}>
				<textarea
					value={answer}
					onChange={handleTextareaChange}
					disabled={status === "submitting"}
				/>
				<br />
				<button disabled={answer.length === 0 || status === "submitting"}>
					Submit
				</button>
				{error !== null && <p className="Error">{error.message}</p>}
			</form>
		</>
	);
}

function submitForm(answer: string): void | Promise<unknown> {
	// Pretend it's hitting the network.
	return new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			let shouldError = answer.toLowerCase() !== "marie curie";
			if (shouldError) {
				reject(new Error("Good guess but a wrong answer. Try again!"));
			} else {
				resolve();
			}
		}, 1500);
	});
}
