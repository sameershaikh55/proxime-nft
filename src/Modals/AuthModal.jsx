import React, { useState } from "react";
import clsx from "clsx";

import GridContainer from "../components/GridContainer/GridContainer";
import Signin from "../components/Signin/Signin";
import SignUp from "../components/SignUp/SignUp";

const Modal = ({ isModalActive, hideModal }) => {
	const [isSignup, setIsSignup] = useState(false);

	const toggleForm = () => {
		setIsSignup((prevState) => !prevState);
	};

	return (
		<>
			<div
				className={clsx("overlay", { active: isModalActive })}
				onClick={hideModal}
			/>
			<div
				id="auth-modal"
				className={clsx("modal", { isSignup, active: isModalActive })}
			>
				<div className="left"></div>
				<div className="right">
					<div className="main">
						<h3>Sign {isSignup ? "Up" : "In"} Now</h3>

						<p className="mt-3">
							Placeholder text is the label for possible content in a text box.
							It can normally be found Placeholder.
						</p>

						<GridContainer rowClassName="gy-4 mt-2">
							{isSignup ? (
								<SignUp hideModal={hideModal} />
							) : (
								<Signin hideModal={hideModal} />
							)}
						</GridContainer>

						{/* <div className="text-underlined mt-3 fw-500">Forget Password?</div> */}

						{isSignup ? (
							<div className="fw-500 mt-3">
								Already Have An Account?{" "}
								<span
									onClick={toggleForm}
									className="form-toggler text-primary-1 text-underlined c-pointer"
								>
									Sign In
								</span>
							</div>
						) : (
							<div className="fw-500 mt-3">
								Don't Have An Account?{" "}
								<span
									onClick={toggleForm}
									className="form-toggler text-primary-1 text-underlined c-pointer"
								>
									{" "}
									Sign up
								</span>
							</div>
						)}

						{/* <div className="text-center mt-4">
              <h5 className="text-light-1">Or Sign Up With</h5>

              <div className="signup-options">
                <button className="btn">
                  <img
                    src="./assets/vectors/signup-option-1.svg"
                    alt="signup-option-1"
                  />
                </button>
                <button className="btn">
                  <img
                    src="./assets/vectors/signup-option-2.svg"
                    alt="signup-option-2"
                  />
                </button>
                <button className="btn">
                  <img
                    src="./assets/vectors/signup-option-3.svg"
                    alt="signup-option-3"
                  />
                </button>
              </div>
            </div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
