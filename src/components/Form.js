import React from "react";

const Form = (props) => {
	const { handleChange, handleSubmit, value } = props;
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Create a task"
					onChange={handleChange}
					value={value}
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
