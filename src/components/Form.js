import React from "react";
import { useContext } from "react";
import Context from "../contexts/Context";

const Form = () => {
	const { handleChange, handleSubmit, task } = useContext(Context);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Create a task"
					onChange={handleChange}
					value={task}
				/>
				<button className="desktop-view" type="submit">
					Add
				</button>
				<button className="only-on-mobile" type="submit">
					<i class="fas fa-plus"></i>
				</button>
			</form>
		</>
	);
};

export default Form;
