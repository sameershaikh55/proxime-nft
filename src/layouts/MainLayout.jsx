import React, { useContext, useState } from "react";
import clsx from "clsx";
import { AuthContext } from "../Authentication";
import Navbar from "../partials/Navbar/Navbar";
import Footer from "../partials/Footer/Footer";

import AuthModal from "../Modals/AuthModal";

const MainLayout = ({ rootClassName, children }) => {
	const { user } = useContext(AuthContext);

	const [isModalActive, setIsModalActive] = useState(false);

	return (
		<>
			<AuthModal
				isModalActive={isModalActive}
				hideModal={() => {
					setIsModalActive(false);
				}}
			/>
			<Navbar
				showModal={() => {
					if (!user) {
						setIsModalActive(true);
					}
				}}
			/>

			<div className={clsx(rootClassName, "main-screen-content")}>
				{children}
			</div>

			<Footer />
		</>
	);
};

export default MainLayout;
