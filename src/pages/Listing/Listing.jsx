import React, { useEffect } from "react";

import Accordion from "../../components/Accordion/Accordion";
import Section from "../../components/Section/Section";
import MainLayout from "../../layouts/MainLayout";
import Select from "../../components/Select/select";
import Option from "../../components/Select/option";
import GridContainer from "../../components/GridContainer/GridContainer";
import { useParams } from "react-router-dom";
import { gettingData } from "../../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Listing = ({ gettingData, products }) => {
	// GETTING PARAMS
	const { id } = useParams();

	useEffect(() => {
		gettingData("products", "PRODUCTS");
	}, []);

	if (!products) {
		return <div className="loading">loading...</div>;
	}

	const filterActive = products.filter((item) => item.id === id);

	return (
		<MainLayout>
			<Section id="listing">
				<GridContainer rowClassName="gy-4" rootClassName="mb-4">
					<div className="col-lg-6">
						<div className="w-100 listing_product">
							<img
								className="w-100"
								src={filterActive.length && filterActive[0].product_picture}
								// src="/assets/vectors/listing-head-img.svg"
								alt="listing-head"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="head-info-box">
							<div>
								<div className="d-flex justify-content-between align-items-center gap-4 flex-wrap">
									<div className="fs-20 text-light-1">
										United Collection #215557776
									</div>
									<div className="options">
										<div className="option">
											<img src="/assets/vectors/opt-undo.svg" alt="undo" />
										</div>
										<div className="option">
											<img src="/assets/vectors/opt-send.svg" alt="send" />
										</div>
										<div className="option">
											<img src="/assets/vectors/opt-share.svg" alt="share" />
										</div>
										<div className="option">
											<img src="/assets/vectors/opt-menu.svg" alt="menu" />
										</div>
									</div>
								</div>

								<h3 className="mt-3">
									{filterActive.length && filterActive[0].product_title}
								</h3>
							</div>

							<div className="owner">
								<div className="text-light-1">
									Owned By <span className="text-primary-1">You</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<Accordion
							title="Description"
							icon="/assets/vectors/acc-offers-icon.svg"
						>
							<div className="ms-3 ps-1">
								{/* <div className="text-light-1">
									Owned By <span className="text-primary-1">You</span>
								</div>
								<div className="text-light-1 mt-3 fs-14">
									United Collection #215557776
								</div> */}
								<p className="text-light-1">
									{filterActive.length && filterActive[0].product_description}
								</p>
							</div>
						</Accordion>
						<Accordion
							className="blend"
							title="About United Collection #277101988"
							icon="/assets/vectors/acc-collection-icon.svg"
						></Accordion>
						<Accordion
							className="blend"
							title="Details"
							icon="/assets/vectors/acc-details-icon.svg"
						></Accordion>
					</div>
					<div className="col-lg-6">
						<Accordion
							title="Price History"
							icon="/assets/vectors/acc-history-icon.svg"
						>
							<div className="text-center">
								<img
									className="w-100"
									style={{ maxWidth: 250 }}
									src="/assets/vectors/price-history-graph.svg"
									alt="graph"
								/>
							</div>
						</Accordion>
					</div>
				</GridContainer>
				<Accordion
					className="mb-4"
					title="Listings"
					icon="/assets/vectors/acc-listings-icon.svg"
				></Accordion>
				<Accordion
					className="mb-4"
					title="Offers"
					icon="/assets/vectors/acc-offers-icon.svg"
				>
					<div className="placeholder">
						<img
							className="w-100"
							style={{ maxWidth: 427 }}
							src="/assets/vectors/offers-placeholder.svg"
							alt="placeholder"
						/>
						<h2 className="placeholder-text">No Offer Yet</h2>
					</div>
				</Accordion>
				<Accordion
					className="mb-4 activities"
					bodyClassName="pb-3"
					title="Item Activity"
					icon="/assets/vectors/acc-activity-icon.svg"
				>
					<Select placeholder="Filter">
						<Option value="Lorem">Lorem</Option>
					</Select>

					<div className="table-container">
						<table>
							<thead>
								<tr>
									<th>Event</th>
									<th>Price</th>
									<th>From</th>
									<th>To</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Minted</td>
									<td>0</td>
									<td>Null Address</td>
									<td>You</td>
									<td>20 Mins</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Accordion>
				<Accordion
					title="More From This Collection"
					icon="/assets/vectors/acc-move-icon.svg"
				>
					<div className="d-flex justify-content-center">
						<div className="btn btn-primary p-3 px-5 mt-0">View collection</div>
					</div>
				</Accordion>

				<Link to="/">
					<div className="p-3 px-5 btn btn-gradient mt-4 rounded-3">
						Publish
					</div>
				</Link>
			</Section>
		</MainLayout>
	);
};

const mapStatetoProps = (state) => {
	return {
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Listing);
