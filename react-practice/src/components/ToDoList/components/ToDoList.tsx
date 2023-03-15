import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

const styles: any = {
	container: {
		border: "1px solid black",
		width: "50%",
		margin: "auto",
		justifyContent: "center",
	},
	header: {
		textAlign: "center",
	},
};

type ToDoItem = {
	id: number;
	text: string;
	isComplete: boolean;
	importance?: "high" | "medium" | "low";
};

const ToDoList = () => {
	const [list, setList] = useState<any>([]);

	const addToDoItem = (item: any) => {
		if (!item.text) {
			return;
		}
		const newToDo = [item, ...list];
		setList(newToDo);
	};

	const completeToDo = (id: any) => {
		let updatedTodo = list.map((item: any) =>
			item.id === id ? (item.isComplete = !item.isComplete) : item
		);
		setList(updatedTodo);
	};

	const editToDo = (id: any, newValue: any) => {
		if (!newValue.text) {
			return;
		}
		setList((prev: any) =>
			prev.map((item: any) => (item.id === id ? newValue : item))
		);
	};

	const deleteToDoItem = (id: any) => {
		const updatedToDo = [...list].filter((item) => item.id !== id);

		setList(updatedToDo);
	};

	if (!list.length) return <div>No current to-do items. (Add a to-do)</div>;

	return (
		<div style={styles.container}>
			<h1 style={styles.header}>ToDoList</h1>
			<ToDoForm onSubmit={addToDoItem} />
			{list.map((item: any) => {
				return (
					<ToDoItem
						id={item.id}
						text={item.text}
						importance={item.importance}
						key={item.id}
						isComplete={item.isComplete}
						completeToDo={completeToDo}
						editToDo={editToDo}
						deleteToDoItem={deleteToDoItem}
					/>
				);
			})}
		</div>
	);
};

export default ToDoList;
