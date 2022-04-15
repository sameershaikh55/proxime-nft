import React, { useContext, useEffect } from "react";
import { database } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { connect } from "react-redux";
import { gettingData } from "../../../redux/action";
import { AuthContext } from "../../../Authentication";

const TextCard = ({
	id,
	gettingData,
	product_picture,
	product_title,
	product_description,
	product_price,
	product_available,
	cart,
	products,
}) => {
	const { user, userUid } = useContext(AuthContext);

	useEffect(() => {
		gettingData("products", "PRODUCTS");
	}, []);

	// ADD TO CART
	const addToCart = async () => {
		// FIREBASE ADD FUNCTION
		await addDoc(collection(database, "cart"), {
			userUid: userUid,
			product_picture,
			product_title,
			product_description,
			product_price,
			product_available,
			product_delivery_info: "Free Shipping",
			product_quantity: 1,
			product_code: "WA16Z",
		});

		gettingData("cart", "CART");
	};

	const userData =
		products.length &&
		products
			.filter((content) => content.userUid === userUid)
			.filter((content) => content.id === id);

	const filterData =
		cart.length &&
		cart
			.filter((content) => content.userUid === userUid)
			.filter((content) => content.product_title === product_title);

	return (
		<div className="text-card">
			<div className="card-img">
				<img src={product_picture} alt={product_title} />
			</div>

			<div className="card-text">
				<h5>{product_title}</h5>
				<p className="small">{product_description}</p>

				<div className="mt-4 d-flex justify-content-between">
					<p className="small">Lowest</p>
					<p className="small">Available</p>
				</div>

				<div className="d-flex justify-content-between">
					<p className="small">${product_price}</p>
					<p className="small">{product_available}</p>
				</div>

				{(!userData.length && user && (
					<div className="mt-4 d-flex align-items-center">
						{(filterData.length && (
							<svg
								className="me-4"
								stroke="#000"
								fill="#000"
								stroke-width="0"
								viewBox="0 0 16 16"
								height="3em"
								width="3em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
								<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
							</svg>
						)) || (
							<svg
								className="me-4"
								stroke="#000"
								fill="#000"
								stroke-width="0"
								viewBox="0 0 16 16"
								height="3em"
								width="3em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
								<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
							</svg>
						)}
						<button
							disabled={(filterData.length && true) || false}
							onClick={() => addToCart()}
							className={`${
								(filterData.length && "btn-dark opacity-25") || "btn-dark"
							} btn rounded-3 d-flex align-items-center justify-content-center fw-bold text-center`}
						>
							{(filterData.length && "Added") || "Add to cart"}
						</button>
					</div>
				)) ||
					(user && (
						<button
							disabled={true}
							className={`btn-dark opacity-25 btn rounded-3 mt-4`}
						>
							Owned
						</button>
					))}
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		cart: state.reducer.cart,
		products: state.reducer.products,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		gettingData: function (tableName, type) {
			dispatch(gettingData(tableName, type));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(TextCard);
