import React, { useState } from "react";
import "./ContactformStyle.css";
import { useForm } from "react-hook-form";

function ContactUs() {
	const [status, setStatus] = useState("Submit");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setStatus("Sending...");
		const { name, email, message, subject } = data;
		let details = {
			name: name,
			email: email,
			subject: subject,
			message: message,
		};
		let response = await fetch("http://localhost:5000/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details),
		});
		setStatus("Submit");
		let result = await response.json();
		alert(result.status);
	};

	return (
		<div className="bgblack contact_us">
			<div className="ContactForm ">
				<h1>Contact Us</h1>
				<div className="row">
					<div className="col-12 text-center">
						<div className="contactForm">
							<form
								className="row gy-4"
								id="contact-form"
								onSubmit={handleSubmit(onSubmit)}
								noValidate
							>
								{/* Row 1 of form */}
								<div className="col-12 col-md-6">
									<div className="position-relative">
										<input
											type="text"
											name="name"
											{...register("name", {
												required: {
													value: true,
													message: "Please enter your name",
												},
												maxLength: {
													value: 30,
													message: "Please use 30 characters or less",
												},
											})}
											className="form-control formInput w-100"
											placeholder="Name"
										></input>
										{errors.name && (
											<span className="errorMessage">
												{errors.name.message}
											</span>
										)}
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="position-relative">
										<input
											type="email"
											name="email"
											{...register("email", {
												required: true,
												pattern:
													/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
											})}
											className="form-control formInput w-100"
											placeholder="Email address"
										></input>
										{errors.email && (
											<span className="errorMessage">
												Please enter a valid email address
											</span>
										)}
									</div>
								</div>

								<div className="col-12">
									<div className="position-relative">
										<input
											type="text"
											name="subject"
											{...register("subject", {
												required: {
													value: true,
													message: "Please enter a subject",
												},
												maxLength: {
													value: 75,
													message: "Subject cannot exceed 75 characters",
												},
											})}
											className="form-control formInput w-100"
											placeholder="Subject"
										></input>
										{errors.subject && (
											<span className="errorMessage">
												{errors.subject.message}
											</span>
										)}
									</div>
								</div>

								<div className="col-12">
									<div className="position-relative">
										<textarea
											rows={3}
											name="message"
											{...register("message", {
												required: true,
											})}
											className="form-control formInput w-100"
											placeholder="Message"
										></textarea>
										{errors.message && (
											<span className="errorMessage">
												Please enter a message
											</span>
										)}
									</div>
									<div className="col-12 d-flex justify-content-center inp_container">
										<button className="submit-btn px-4" type="submit">
											{status}
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ContactUs;
