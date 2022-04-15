import React, { useContext, useEffect, useState } from "react";
import HeroSm from "../../components/HeroSm/HeroSm";
import Section from "../../components/Section/Section";
import Select from "../../components/Select/select";
import Option from "../../components/Select/option";
import MainLayout from "../../layouts/MainLayout";
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";
import { database, storage } from "../../firebase";
import { useHistory } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../Authentication";

const CreateNewItem = () => {
	const { userUid } = useContext(AuthContext);
	const history = useHistory();

	// STATES
	const [inpChange, setInpChange] = useState({
		item_name: "",
		external_link: "",
		item_description: "",
	});
	const [uploadedImage, setUploadedImage] = useState();
	const [imgLoader, setImgLoader] = useState(false);

	// generateID
	const generateID = () => {
		var text = "";
		var possible = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz0123456789";

		for (var i = 0; i < 20; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	};

	function dateTime() {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		var currentdate = new Date();
		var datetime = `${
			months[currentdate.getMonth()]
		} ${currentdate.getDate()}, ${currentdate.getFullYear()} ${
			(currentdate.getHours() < 10 && `0${currentdate.getHours()}`) ||
			currentdate.getHours()
		}:${
			(currentdate.getMinutes() < 10 && `0${currentdate.getMinutes()}`) ||
			currentdate.getMinutes()
		}:${
			(currentdate.getSeconds() < 10 && `0${currentdate.getSeconds()}`) ||
			currentdate.getSeconds()
		}`;

		return datetime;
	}

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
		const storageRef = ref(storage, `nfts/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {},
			(error) => console.log(error),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImgLoader(false);
					setUploadedImage(downloadURL);
				});
			}
		);
	};

	// HANDLE CHANGE FOR INPUTS
	const handleChange = (e) => {
		const { name, value } = e.target;

		setInpChange((item) => {
			return { ...item, [name]: value };
		});
	};

	// FORM SUBMIT
	const handleSubmit = async (id) => {
		const sendingData = {
			userUid: userUid,
			product_title: inpChange.item_name,
			product_description: inpChange.item_description,
			product_picture: uploadedImage,
			product_price: "800.00",
			product_available: "124/2003",
			product_delivery_info: "Free Shipping",
			product_quantity: 1,
			createdAt: dateTime(),
		};

		// FIREBASE ADD FUNCTION
		await setDoc(doc(database, "products", id), sendingData);

		history.push(`/listing/${id}`);
	};

	return (
		<MainLayout>
			<HeroSm title="Create New Item" />

			<Section id="create-item-main">
				<div className="form-wrapper">
					<div className="req-fields gap-5">
						<div className="left">
							<div>
								<div className="text-light-1 fw-bold">
									<span className="text-red">*</span>Required Fields
								</div>

								<h4 className="my-4">
									Image, Video, Audio, Or 3D Model
									<span className="text-red">*</span>
								</h4>

								<div className="text-light-1 fs-16 lh-15">
									File Types Supported: JPG, PNG, GIF, SVG, MP4, WEBM, WAV, OGG,
									GLB, GLTF. MAX SIZE: 100MB
								</div>
							</div>
						</div>

						<div className="right">
							<div className="img-uploader">
								<label htmlFor="image">
									{(imgLoader && (
										<img
											className="loader_img"
											src={
												"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif"
											}
											alt="loader"
										/>
									)) || (
										<img
											className={`${
												(uploadedImage && "uploaded") || "upload"
											} `}
											src={
												(uploadedImage && uploadedImage) ||
												"./assets/vectors/upload-placeholder.svg"
											}
											alt="nft"
										/>
									)}
								</label>
								{(!uploadedImage && (
									<input id="image" type="file" onChange={formHandler} />
								)) ||
									""}
							</div>
						</div>
					</div>

					<div className="sub-sec">
						<div className="custom-form-control">
							<label htmlFor="name">
								Name <span className="text-red">*</span>
							</label>
							<input
								value={inpChange.item_name}
								type="text"
								placeholder="Item Name"
								onChange={handleChange}
								name="item_name"
							/>
						</div>
					</div>

					<div className="sub-sec">
						<h4 className="mb-3">External Links</h4>
						<p className="text-light-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
							voluptatem a sequi, ea esse nemo adipisci numquam ipsa blanditiis
							debitis voluptatum vitae odit voluptate doloremque omnis officia
							eum consectetur? Corrupti?
						</p>

						<div className="custom-form-control">
							<input
								value={inpChange.external_link}
								type="text"
								placeholder="www.dummy.com"
								onChange={handleChange}
								name="external_link"
							/>
						</div>
					</div>

					<div className="sub-sec">
						<h4 className="mb-3">Description</h4>
						<p className="text-light-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
							voluptatem a sequi, ea esse nemo adipisci numquam ipsa blanditiis
							debitis voluptatum vitae odit voluptate doloremque omnis officia
							eum consectetur? Corrupti?
						</p>

						<div className="custom-form-control">
							<textarea
								value={inpChange.item_description}
								cols="30"
								rows="10"
								placeholder="Provide details of your item"
								onChange={handleChange}
								name="item_description"
							></textarea>
						</div>
					</div>

					<div className="sub-sec mb-0">
						<h4 className="mb-3">Collection</h4>
						<p className="text-light-1 mb-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>

						<Select
							icon="./assets/vectors/select-round-icon.svg"
							placeholder="United Collection #215557776"
						>
							<Option value="United Collection #215557776">
								United Collection #215557776
							</Option>
						</Select>

						<div className="settings">
							<div className="item active">
								<div className="item-left">
									<div className="img">
										<img
											className="icon"
											src="./assets/vectors/collection-settings-props.svg"
											alt="properties"
										/>
									</div>
									<div className="text">
										<h4>Properties</h4>
										<p className="text-light-1 mt-3">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
								</div>
								<div className="item-right">
									<button className="btn btn-add-lg">+</button>
								</div>
							</div>
							<div className="item">
								<div className="item-left">
									<div className="img">
										<img
											className="icon"
											src="./assets/vectors/collection-settings-level.svg"
											alt="properties"
										/>
									</div>
									<div className="text">
										<h4>Level</h4>
										<p className="text-light-1 mt-3">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
								</div>
								<div className="item-right">
									<button className="btn btn-add-lg">+</button>
								</div>
							</div>
							<div className="item">
								<div className="item-left">
									<div className="img">
										<img
											className="icon"
											src="./assets/vectors/collection-settings-status.svg"
											alt="properties"
										/>
									</div>
									<div className="text">
										<h4>Status</h4>
										<p className="text-light-1 mt-3">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
								</div>
								<div className="item-right">
									<button className="btn btn-add-lg">+</button>
								</div>
							</div>
							<div className="item">
								<div className="item-left">
									<div className="img">
										<img
											className="icon"
											src="./assets/vectors/collection-settings-unlockable.svg"
											alt="properties"
										/>
									</div>
									<div className="text">
										<h4>Unlockable Content</h4>
										<p className="text-light-1 mt-3">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
								</div>
								<div className="item-right">
									<label class="switch">
										<input type="checkbox" />
										<span class="slider round"></span>
									</label>
								</div>
							</div>
							<div className="item">
								<div className="item-left">
									<div className="img">
										<img
											className="icon"
											src="./assets/vectors/collection-settings-sensitive.svg"
											alt="properties"
										/>
									</div>
									<div className="text">
										<h4>Explicit &amp; Sensitive Content</h4>
										<p className="text-light-1 mt-3">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
									</div>
								</div>
								<div className="item-right">
									<label class="switch">
										<input type="checkbox" />
										<span class="slider round"></span>
									</label>
								</div>
							</div>
							<div className="item d-block no-bb">
								<div className="item-left d-block">
									<div className="text">
										<h4>Supply</h4>
										<p className="text-light-1 mt-3">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>
										<div className="custom-form-control">
											<input type="text" placeholder="01" />
										</div>
									</div>
								</div>
							</div>
							<div className="item no-bb d-block">
								<div className="item-left flex-grow-1 d-block">
									<div className="text">
										<h4>Blockchain</h4>
										<p className="text-light-1 my-3">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</p>

										<Select
											placeholder="Ethereum"
											icon="./assets/vectors/select-eth-icon.svg"
										>
											<Option value="Ethereum">Ethereum</Option>
										</Select>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="sub-sec">
						<h4 className="mb-3">Freeze Metadata</h4>
						<p className="text-light-1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
							voluptatem a sequi, ea esse nemo adipisci numquam ipsa blanditiis
							debitis voluptatum vitae odit voluptate doloremque omnis officia
							eum consectetur? Corrupti?
						</p>

						<div className="custom-form-control">
							<input
								type="text"
								placeholder="To Freeze Metadata, You Must Create Your First Item"
							/>
						</div>

						<button
							disabled={
								uploadedImage && inpChange.item_name && inpChange.external_link
									? false
									: true
							}
							onClick={() => handleSubmit(generateID())}
							className="p-3 px-5 btn btn-gradient rounded-3 mt-5"
						>
							Create
						</button>
					</div>
				</div>
			</Section>
		</MainLayout>
	);
};

export default CreateNewItem;
