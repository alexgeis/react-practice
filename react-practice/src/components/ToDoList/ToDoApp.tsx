import ToDoList from "./components/ToDoList";

const styles: any = {
	container: {
		border: "1px solid white",
		width: "70%",
		margin: "auto",
		padding: "20px 40px",
		justifyContent: "center",
	},
};

export default function ToDoApp() {
	return (
		<>
			<div style={styles.container}>
				<ToDoList />
			</div>
		</>
	);
}
