import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = createContext();

export const ContextProvider = ({ children }) => {
	//USESTATE DEFINITIONS
	const [task, setTask] = useState("");
	const [isEmpty, setIsEmpty] = useState(false);
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todo")) !== null
			? JSON.parse(localStorage.getItem("todo"))
			: []
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
		let newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed,
				};
			} else {
				return todo;
			}
		});
		// set the checkedArr with the newTodo data
		let newCheckedArr = newTodos.filter(({ completed }) => completed === true);
		setTodos(newTodos);
		setCheckedTodos(newCheckedArr);
	};

	const handleDelete = (id) => {
		const filteredTodo = todos.filter((todo) => todo.id !== id);
		setTodos([...filteredTodo]);

		const filteredCheckedTodos = checkedTodos.filter((item) => item.id === id);

		setCheckedTodos(filteredCheckedTodos);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let re = /\s+/g;
		let formattedTask = task.trim().replace(re, " ");
		const newTodo = [
			...todos,
			{ todo: formattedTask, id: uuidv4(), completed: false },
		];

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

	//RETURN STATEMENT
	return (
		<Context.Provider
			value={{
				task,
				setTask,
				isEmpty,
				setIsEmpty,
				todos,
				setTodos,

				checkedTodos,
				setCheckedTodos,
				handleChange,
				handleChecked,
				handleDelete,
				handleSubmit,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
