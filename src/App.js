import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import Todo from "./components/todo/Todo";

function App() {
	//USESTATE DEFINITIONS
	const [task, setTask] = useState("");
	const [isEmpty, setIsEmpty] = useState(false);
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todo")) !== null
			? JSON.parse(localStorage.getItem("todo"))
			: []
	);
	const [isChecked, setIsChecked] = useState(
		JSON.parse(localStorage.getItem("isChecked")) !== null
			? JSON.parse(localStorage.getItem("isChecked"))
			: {}
	);
	const [checkedTodos, setCheckedTodos] = useState(
		JSON.parse(localStorage.getItem("checkedTodos")) !== null
			? JSON.parse(localStorage.getItem("checkedTodos"))
			: []
	);

	// EVENT HANDLER DEFINITIONS
	const handleChange = (e) => {
		let newValue = e.target.value;
		setTask(newValue);
	};

	const handleChecked = (id) => {
		// setstate function takes a function that returns the current state, this function, takes as its parameter, the current state(state value before the function executes) value.
		setIsChecked((current) => {
			let data = { ...current, [id]: !current[id] };
			let checkedArr = Object.values(data).filter((item) => item === true);
			setCheckedTodos(checkedArr);
			return {
				...current,
				[id]: !current[id],
			};
		});
	};

	const handleDelete = (id) => {
		const filteredTodo = todos.filter((todo) => todo.id !== id);
		setTodos([...filteredTodo]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let re = /\s+/g;
		let formattedTask = task.trim().replace(re, " ");
		const newTodo = [...todos, { todo: formattedTask, id: uuidv4() }];

		if (task !== "") {
			setTodos(newTodo);
		} else {
			setIsEmpty(true);
			setTimeout(() => {
				setIsEmpty(false);
			}, 3000);
		}

		setTask("");
	};

	// USE EFFECT DEFINITIONS
	useEffect(() => {
		if (!todos.length) return;
		localStorage.setItem("todo", JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		localStorage.setItem("isChecked", JSON.stringify(isChecked));
	}, [isChecked]);

	useEffect(() => {
		localStorage.setItem("checkedTodos", JSON.stringify(checkedTodos));
	}, [checkedTodos]);

	return (
		<div className="App">
			{isEmpty ? <div className="errorMsg">Please create a task.</div> : null}
			<div className="container">
				<h1>Todo</h1>
				<div className="form-todo-container">
					<Form
						value={task}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
					/>
					<Todo
						todos={todos}
						handleDelete={handleDelete}
						handleChecked={handleChecked}
						isChecked={isChecked}
						checkedTodos={checkedTodos}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
