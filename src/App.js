import { useEffect, useContext } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/todo/Todo";
import Context from "./contexts/Context";

function App() {
	const { todos, checkedTodos, isEmpty } = useContext(Context);

	// USE EFFECT DEFINITIONS
	useEffect(() => {
		// if (!todos.length) return;
		localStorage.setItem("todo", JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		localStorage.setItem("checkedTodos", JSON.stringify(checkedTodos));
	}, [checkedTodos]);

	return (
		<div className="App">
			{isEmpty ? <div className="errorMsg">Please create a task.</div> : null}
			<div className="container">
				<h1>Todo</h1>
				<div className="form-todo-container">
					<Form />
					<Todo />
				</div>
			</div>
		</div>
	);
}

export default App;
