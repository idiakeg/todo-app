import React from "react";
import TodoListItem from "./TodoListItem";
import { useContext } from "react";
import Context from "../../contexts/Context";

const TodoList = () => {
	const { todos, handleDelete, handleChecked, isChecked } = useContext(Context);

	return todos.length > 0 ? (
		<>
			<div className="todo-list-container">
				{todos.map((todo) => (
					<TodoListItem
						todo={todo.todo}
						id={todo.id}
						handleDelete={handleDelete}
						handleChecked={handleChecked}
						isChecked={isChecked[todo.id]}
						key={todo.id}
					/>
				))}
			</div>
		</>
	) : (
		<>
			<div className="no-data-yet">No task yet</div>
		</>
	);
};

export default TodoList;
