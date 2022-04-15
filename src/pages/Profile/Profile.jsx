import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { AuthContext } from "../../Authentication";
import GridContainer from "../../components/GridContainer/GridContainer";
import Section from "../../components/Section/Section";
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";
import { database, storage } from "../../firebase";
import MainLayout from "../../layouts/MainLayout";
import { gettingData } from "../../redux/action";
import UserInfoJumbotron from "./UserInfo/UserInfoJumbotron";
import { doc, updateDoc } from "firebase/firestore";

const Profile = ({ profile, products, gettingData }) => {
	const { userEmail, userUid } = useContext(AuthContext);

	// STATES
	const [imgLoader, setImgLoader] = useState(false);

	useEffect(() => {
		gettingData("profile", "PROFILE");
		gettingData("products", "PRODUCTS");
	}, []);

	const userCheck =
		(userEmail && profile.filter((content) => content.email === userEmail)) ||
		[];

	// IMAGR HANDLER
	const formHandler = (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		uploadFiles(file);
	};

	// IMAGE UPLOAD TO FIREBASE
	const uploadFiles = (file) => {
		setImgLoader(true);

		if (!file) return;
		const storageRef = ref(storage, `profiles/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {},
			(error) => console.log(error),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImgLoader(false);

					const udpateProfileImage = async (downloadURL) => {
						await updateDoc(doc(database, "profile", userCheck[0].id), {
							...userCheck[0],
							profilePicture: downloadURL,
						});
					};

					udpateProfileImage(downloadURL);
					gettingData("profile", "PROFILE");
				});
			}
		);
	};

	if (!products) {
		return <div></div>;
	}

	const filteredProducts = products.filter((item) => item.userUid === userUid);

	filteredProducts.sort(
		(date1, date2) => new Date(date2.createdAt) - new Date(date1.createdAt)
	);

	return (
		<MainLayout>
			<UserInfoJumbotron
				imgLoader={imgLoader}
				userCheck={userCheck}
				userEmail={userEmail}
				formHandler={formHandler}
			/>

			{filteredProducts.length && (
				<div>
					<Section id="single-drop">
						<GridContainer rowClassName="gy-4">
							<div className="col-lg-6 d-flex align-items-center">
								<img
									className="single_drop_img d-block w-100"
									src={filteredProducts[0].product_picture}
									alt="release-item"
								/>
							</div>
							<div className="col-lg-6 d-flex align-items-center">
								<div className="text">
									<h2>{filteredProducts[0].product_title}</h2>

									<p className="mt-4">
										{filteredProducts[0].product_description}
									</p>

									<div className="drop-info mt-4">
										<div>Dropped Thursday 8/12 1am</div>
										<div>EDITIONS : 2500</div>
										<div className="d-inline-flex align-items-center">
											DETAILS
											<button className="btn btn-gradient ms-3">
												<img src="./assets/vectors/dots.svg" alt="dots" />
											</button>
										</div>
									</div>

									<div className="btns mt-5">
										<button className="btn btn-grey">Drop Ended</button>
										<button
											style={{ marginTop: 18 }}
											className="btn btn-light-grey"
										>
											View Editons
										</button>
									</div>
								</div>
							</div>
						</GridContainer>
					</Section>

					<Section id="past-drops">
						<GridContainer rowClassName="gy-4">
							{filteredProducts.map((el, i) => {
								const {
									id,
									product_picture,
									product_title,
									product_description,
								} = el;

								if (i === 0) {
									return "";
								}

								return (
									<div className="col-md-4 col-sm-6" key={id}>
										<div className="flip-card">
											<div className="flip-card-inner">
												<div className="flip-card-front">
													<img
														className="past_drop_img"
														src={product_picture}
														alt="Avatar"
													/>
												</div>
												<div className="flip-card-back">
													<div>
														<h1>{product_title}</h1>
														<br />
														<p>{product_description}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</GridContainer>
					</Section>
				</div>
			) || <div className="no_data_profile">No Data</div>}
		</MainLayout>
	);
};

const mapStatetoProps = (state) => {
	return {
		profile: state.reducer.profile,
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
