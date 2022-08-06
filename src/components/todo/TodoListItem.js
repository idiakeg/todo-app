import React from "react";

const TodoListItem = (props) => {
	const { todo, handleDelete, id, handleChecked, isChecked } = props;

	const inputId = `task-${id}`;
	return (
		<>
			<div className="todo-list">
				<label htmlFor={inputId}>
					<input
						checked={isChecked ? true : false}
						type="checkbox"
						id={inputId}
						onChange={() => handleChecked(id)}
					/>
					<span className={isChecked ? "checked" : null}>{todo}</span>
				</label>
				<button onClick={() => handleDelete(id)}>
					<i class="fas fa-trash-alt"></i>
				</button>
			</div>
		</>
	);
};

export default TodoListItem;
