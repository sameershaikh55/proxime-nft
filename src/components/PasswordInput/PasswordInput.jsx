import React, { useState } from "react";

const PasswordInput = ({ ...rest }) => {
	const [showPwd, setShowPwd] = useState(false);

	return (
		<div className="pwd-input-wrapper">
			<input type={showPwd ? "text" : "password"} {...rest} />
			<img
				className="toggle-show c-pointer"
				src={
					showPwd
						? "./assets/vectors/pwd-hide.svg"
						: "./assets/vectors/pwd-show.svg"
				}
				onClick={() => setShowPwd((prevState) => !prevState)}
				alt="show-hide"
			/>
		</div>
	);
};

export default PasswordInput;
