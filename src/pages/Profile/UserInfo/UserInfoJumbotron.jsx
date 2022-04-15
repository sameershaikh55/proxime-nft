import React from "react";
import Section from "../../../components/Section/Section";

const UserInfoJumbotron = ({
	imgLoader,
	uploadedImage,
	userCheck,
	userEmail,
	formHandler,
}) => {
	return (
		<Section id="user-info-jumbotron">
			<div className="user-info-wrapper">
				<div className="user-img">
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
							className={`${(uploadedImage && "uploaded") || "upload"} `}
							src={
								("profilePicture" in userCheck[0] &&
									userCheck[0].profilePicture) ||
								"https://dimensionus.com/wp-content/uploads/2017/07/user-avatar-dark.jpg"
							}
							alt="nft"
						/>
					)}

					<label htmlFor="image">
						<input id="image" type="file" onChange={formHandler} />
						<img
							className="upload_icon"
							src="./assets/vectors/upload-placeholder.svg"
							alt="user"
						/>
					</label>
				</div>

				<div className="username">
					{(userEmail && userCheck.length && userCheck[0].firstName) ||
						"No User found"}
				</div>

				<button className="btn btn-primary-inverted">+Watch</button>

				<div className="bio mt-4">
					<h6>BIO</h6>
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form.
					</p>
				</div>
			</div>
			<div className="tabs">
				<div className="tab active">Past Drops</div>
			</div>
		</Section>
	);
};

export default UserInfoJumbotron;
