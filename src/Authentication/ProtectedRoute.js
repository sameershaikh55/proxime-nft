import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from ".";

const ProtectedRoute = ({ component: Component, ...restProps }) => {
	const { user } = useContext(AuthContext);

	return (
		<Route
			{...restProps}
			render={(...props) => {
				return user ? <Component {...props} /> : <Redirect exact to="/" />;
			}}
		/>
	);
};

export default ProtectedRoute;
