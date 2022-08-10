import React from "react";
import TodoList from "./TodoList";
import TodoTracker from "./TodoTracker";

const Todo = () => {
	return (
		<>
			<div className="todo-container">
				<TodoTracker />
				<TodoList />
			</div>
		</>
	);
};

export default Todo;
