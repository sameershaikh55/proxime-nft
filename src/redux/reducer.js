import { CART, PRODUCTS, PROFILE } from "./type";

const initialState = {
	products: [],
	cart: [],
	profile: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case CART:
			return {
				...state,
				cart: action.payload,
			};
		case PROFILE:
			return {
				...state,
				profile: action.payload,
			};
		default:
			return state;
	}
};
export default reducer;
