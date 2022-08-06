import React from "react";

const TodoTracker = (props) => {
	const { todos, checkedTodos } = props;
	return (
		<>
			<div className="todo-tracker">
				<p>
					Created Tasks <span>{todos.length}</span>
				</p>
				<p>
					Completed Tasks
					<span>
						{checkedTodos.length} of {todos.length}
					</span>
				</p>
			</div>
		</>
	);
};

export default TodoTracker;
