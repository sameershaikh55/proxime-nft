import React, { useEffect, useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [userEmail, setUserEmail] = useState();
	const [userUid, setUserUid] = useState();
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
			setUserEmail(user.email);
			setUserUid(user.uid);
		});
	}, []);

	const logout = () => {
		auth.signOut().then(() => {
			setUser(null);
			setUserEmail(null);
			setUserUid(null);
			history.push("/");
		});
	};

	return (
		<AuthContext.Provider value={{ user, userUid, logout, userEmail }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
