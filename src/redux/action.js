// IMPORTING FIREBASE
import { database } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const dataFunc = (data, type) => {
	return {
		type: type,
		payload: data,
	};
};

// GETTING DATA
export const gettingData = (tableName, type) => {
	return (dispatch) => {
		getDocs(collection(database, tableName)).then((data) => {
			const mapingData = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			dispatch(dataFunc(mapingData, type));
		});
	};
};
