import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { auth, database } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import swal from "sweetalert";

const SignUp = ({ hideModal }) => {
	const {
		watch,
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [showPwd, setShowPwd] = useState(false);
	const [showPwdOne, setShowPwdOne] = useState(false);
	const [loginLoading, setLoginLoading] = useState(false);

	const password = useRef({});
	password.current = watch("password", "");

	const addProfile = async (data) => {
		// FIREBASE ADD FUNCTION
		await addDoc(collection(database, "profile"), {
			email: data.email,
			firstName: data.firstName,
			lastName: data.lastName,
			phoneNumber: data.phoneNumber,
		});
	};

	const onSubmit = (data) => {
		// setLoginLoading(true);
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(() => {
				setLoginLoading(false);
				reset();
				hideModal();
				addProfile(data);

				swal({
					icon: "success",
					buttons: false,
					timer: 3000,
				});
			})
			.catch((error) => {});
	};

	return (
		<form className="row gy-4" onSubmit={handleSubmit(onSubmit)}>
			<div className="col-lg-6">
				<div className="position-relative">
					<input
						className={`${
							errors.firstName && errors.firstName.message && "error_field"
						}`}
						type="text"
						placeholder="First Name"
						{...register("firstName", {
							required: "Required*",
						})}
					/>
					{errors.firstName && (
						<p className="login__error__message">{errors.firstName.message}</p>
					)}
				</div>
			</div>
			<div className="col-lg-6">
				<div className="position-relative">
					<input
						className={`${
							errors.lastName && errors.lastName.message && "error_field"
						}`}
						type="text"
						placeholder="Last Name"
						{...register("lastName", {
							required: "Required*",
						})}
					/>
					{errors.lastName && (
						<p className="login__error__message">{errors.lastName.message}</p>
					)}{" "}
				</div>
			</div>
			<div className="col-lg-6">
				<div className="position-relative">
					<input
						className={`${
							errors.email && errors.email.message && "error_field"
						}`}
						type="text"
						placeholder="Email address"
						{...register("email", {
							required: "Required*",
						})}
					/>
					{errors.email && (
						<p className="login__error__message">{errors.email.message}</p>
					)}{" "}
				</div>
			</div>
			<div className="col-lg-6">
				<div className="position-relative">
					<input
						className={`${
							errors.phoneNumber && errors.phoneNumber.message && "error_field"
						}`}
						type="tel"
						placeholder="Phone Number"
						{...register("phoneNumber", {
							required: "Required*",
						})}
					/>
					{errors.phoneNumber && (
						<p className="login__error__message">
							{errors.phoneNumber.message}
						</p>
					)}{" "}
				</div>
			</div>
			<div className="col-lg-6">
				<div className="pwd-input-wrapper">
					<input
						type={showPwd ? "text" : "password"}
						disabled={(loginLoading && true) || false}
						className={`${
							errors.password && errors.password.message && "error_field"
						}`}
						placeholder="Password"
						{...register("password", {
							required: "Required*",
							minLength: {
								value: 8,
								message: "Password must have at least 8 characters",
							},
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
					{errors.password && (
						<p className="login__error__message">{errors.password.message}</p>
					)}{" "}
				</div>
			</div>
			<div className="col-lg-6">
				<div className="pwd-input-wrapper">
					<input
						type={showPwdOne ? "text" : "password"}
						disabled={(loginLoading && true) || false}
						className={`${
							errors.confirmPassword &&
							errors.confirmPassword.message &&
							"error_field"
						}`}
						placeholder="Confirm Password"
						{...register("confirmPassword", {
							validate: (value) =>
								value === password.current || "The passwords do not match",
							required: "Required*",
						})}
					/>
					<img
						className="toggle-show c-pointer"
						src={
							showPwdOne
								? "./assets/vectors/pwd-hide.svg"
								: "./assets/vectors/pwd-show.svg"
						}
						onClick={() => setShowPwdOne((prevState) => !prevState)}
						alt="show-hide"
					/>
					{errors.confirmPassword && (
						<p className="login__error__message">
							{errors.confirmPassword.message}
						</p>
					)}{" "}
				</div>
			</div>
			<div className="col-12">
				<button className="rounded-3 btn btn-grey mt-2" type="submit">
					Sign Up
				</button>
			</div>
		</form>
	);
};

export default SignUp;
