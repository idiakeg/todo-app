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
		setIsChecked((current) => {
			console.log("before : ", current, id);
			if (current.hasOwnProperty(id)) {
				console.log("delet ", id);
				delete current[id];
			}

			console.log("afta ", current);
			return current;
		});

		console.log(isChecked);
		// How to set the state of isChecked to reflect the deleted id?
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
				isChecked,
				setIsChecked,
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
