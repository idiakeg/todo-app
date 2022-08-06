import React from "react";
import TodoList from "./TodoList";
import TodoTracker from "./TodoTracker";

const Todo = (props) => {
	const { todos, handleDelete, handleChecked, isChecked, checkedTodos } = props;
	return (
		<>
			<div className="todo-container">
				<TodoTracker todos={todos} checkedTodos={checkedTodos} />
				<TodoList
					todos={todos}
					handleDelete={handleDelete}
					handleChecked={handleChecked}
					isChecked={isChecked}
				/>
			</div>
		</>
	);
};

export default Todo;
