import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import swal from "sweetalert";

const Signin = ({ hideModal }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const history = useHistory();
	const [showPwd, setShowPwd] = useState(false);
	const [loginError, setLoginError] = useState("");
	const [loginLoading, setLoginLoading] = useState(false);

	const onSubmit = (data) => {
		setLoginLoading(true);
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then(() => {
				setLoginLoading(false);
				history.push("/");
				reset();
				hideModal();

				swal({
					icon: "success",
					buttons: false,
					timer: 3000,
				});
			})
			.catch((error) => {
				const errorCode = error.code.split("/");
				setLoginError(errorCode[1]);
				setLoginLoading(false);

				if (errorCode[1] === "user-not-found") {
					swal("User not found", {
						icon: "error",
						buttons: false,
						timer: 3000,
					});
				}
			});
	};

	return (
		<form className="row gy-4" onSubmit={handleSubmit(onSubmit)}>
			<div className="col-12">
				<div className="position-relative w-100">
					<input
						disabled={(loginLoading && true) || false}
						type="text"
						placeholder="Email"
						className={`${
							errors.email && errors.email.message && "error_field"
						}`}
						{...register("email", {
							required: "Required*",
							pattern: {
								value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
								message: "Invalid Email*",
							},
						})}
					/>
					{errors.email && (
						<p className="login__error__message">{errors.email.message}</p>
					)}
				</div>
			</div>
			<div className="col-12">
				<div className="position-relative w-100">
					<div className="pwd-input-wrapper">
						<input
							type={showPwd ? "text" : "password"}
							disabled={(loginLoading && true) || false}
							className={`${
								errors.password && errors.password.message && "error_field"
							} ${loginError === "wrong-password" && "error_field"}`}
							placeholder="Password"
							{...register("password", {
								required: "Required*",
							})}
						/>
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

						{(errors.password && (
							<p className="login__error__message">{errors.password.message}</p>
						)) ||
							(loginError === "wrong-password" && (
								<p className="login__error__message">invalid password</p>
							))}
					</div>
				</div>
			</div>
			<div className="col-12">
				<button className="rounded-3 btn btn-grey mt-2" type="submit">
					Sign In
				</button>
			</div>
		</form>
	);
};

export default Signin;
