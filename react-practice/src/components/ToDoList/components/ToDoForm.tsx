import { useState } from "react";

const styles = {
	container: {
		display: "block",
		width: "50%",
		margin: "auto",
	},
	input: {
		width: "100%",
	},
};

const ToDoForm = (props: any) => {
	const [input, setInput] = useState({
		text: "",
		importance: "low",
	});
	const handleSubmit = (e: any) => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: input.text,
			importance: input.importance,
		});
		setInput({
			text: "",
			importance: "",
		});
	};

	const handleChange = (e: any) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<>
			{props.edit ? <h3>Update Item</h3> : ""}

			<div style={styles.container}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder={props.edit ? "Update Item" : "Add To Do"}
						value={input.text}
						name="text"
						onChange={handleChange}
						style={styles.input}
					></input>
					<select
						name="importance"
						value={input.importance}
						onChange={handleChange}
					>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
					<button onClick={handleSubmit}>Add to List</button>
				</form>
			</div>
		</>
	);
};

export default ToDoForm;
