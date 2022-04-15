import React, { useContext, useEffect } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { connect } from "react-redux";
import { AuthContext } from "../../Authentication";
import HeroSm from "../../components/HeroSm/HeroSm";
import Section from "../../components/Section/Section";
import { database } from "../../firebase";

import MainLayout from "../../layouts/MainLayout";
import { gettingData } from "../../redux/action";

const Cart = ({ cart, gettingData }) => {
	const { userUid } = useContext(AuthContext);

	useEffect(() => {
		gettingData("cart", "CART");
	}, []);

	// DELETE
	const deleteCart = async (id) => {
		await deleteDoc(doc(database, "cart", id));
		gettingData("cart", "CART");
	};

	return (
		<MainLayout>
			<HeroSm title="Cart" />

			{(cart.length && (
				<Section id="cart">
					<div className="table-container">
						<table>
							<thead>
								<tr>
									<th>PRODUCT</th>
									<th>DESCRIPTION</th>
									<th>QUANTITY</th>
									<th>UNIT PRICE</th>
									<th>DELIVERY INFO</th>
									<th>SUB TOTAL</th>
									<th>ACTION</th>
								</tr>
							</thead>
							<tbody>
								{cart.length &&
									cart
										.filter((item) => item.userUid === userUid)
										.map((el) => {
											const {
												id,
												product_picture,
												product_title,
												product_description,
												product_price,
												product_delivery_info,
												product_quantity,
												product_code,
											} = el;

											return (
												<tr key={id}>
													<td>
														<img
															className="product_img"
															src={product_picture}
															alt={product_title}
														/>
													</td>
													<td>
														<h6>{product_title}</h6>
														<p className="mt-2">{product_description}</p>
														<p className="mt-1">
															Product code:{" "}
															<span style={{ color: "#545454" }}>
																{product_code}
															</span>
														</p>
													</td>
													<td>
														<div className="quantity-container">
															<button className="btn">-</button>
															<input type="number" value={product_quantity} />
															<button className="btn">+</button>
														</div>
													</td>
													<td>
														<h6>${product_price}</h6>
													</td>
													<td>{product_delivery_info}</td>
													<td>
														<h6>${product_price}</h6>
													</td>
													<td>
														<img
															onClick={() => deleteCart(id)}
															className="bin c-pointer"
															src="./assets/vectors/bin.svg"
															alt="bin"
														/>
													</td>
												</tr>
											);
										})}
							</tbody>
						</table>
					</div>

					<div className="cart-btns d-flex justify-content-between gap-4">
						<button className="btn btn-dark">CONTINUE SHOPPING</button>
						<div className="d-flex gap-4 flex-sm-row flex-column">
							<button className="btn btn-white">CLEAR CART</button>
							<button className="btn btn-white">CHECKOUT</button>
						</div>
					</div>
				</Section>
			)) || <div className="text-center py-5">cart is empty</div>}
		</MainLayout>
	);
};

const mapStatetoProps = (state) => {
	return {
		cart: state.reducer.cart,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		gettingData: function (tableName, type) {
			dispatch(gettingData(tableName, type));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart);
