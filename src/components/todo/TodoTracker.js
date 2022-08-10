import React from "react";
import { useContext } from "react";
import Context from "../../contexts/Context";

const TodoTracker = () => {
	const { todos, checkedTodos } = useContext(Context);

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
