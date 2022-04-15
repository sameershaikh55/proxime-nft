import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { WalletMultiButton as ReactUIWalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Section from "../../components/Section/Section";
import { AuthContext } from "../../Authentication";
import { connect } from "react-redux";
import { gettingData } from "../../redux/action";

var stringTruncate = function (str, length) {
	var dots = str.length > length ? "..." : "";
	return str.substring(0, length) + dots;
};

const Navbar = ({ showModal, profile, gettingData }) => {
	const { user, userEmail, logout } = useContext(AuthContext);
	const [isSideNavActive, setIsSideNavActive] = useState();

	useEffect(() => {
		gettingData("profile", "PROFILE");
	}, []);

	const toggleSideNav = () => {
		setIsSideNavActive((prevState) => !prevState);
	};

	const [provider, setProvider] = useState(null);
	const [connected, setConnected] = useState(false);
	const [pubKey, setPubKey] = useState(null);

	useEffect(() => {
		if ("solana" in window) {
			const solWindow = window;
			if (solWindow?.solana?.isPhantom) {
				setProvider(solWindow.solana);
				// Attemp an eager connection
				solWindow.solana.connect({ onlyIfTrusted: true });
			}
		}
	}, []);

	useEffect(() => {
		provider?.on("connect", (publicKey) => {
			setConnected(true);
			const truncatePublicKey = stringTruncate(publicKey?.toBase58(), 6);
			setPubKey(truncatePublicKey);
		});
		provider?.on("disconnect", () => {
			setConnected(false);
			setPubKey(null);
		});
	}, [provider]);

	const connectHandler = (event) => {
		provider?.connect().catch((err) => {
			console.error("connect ERROR:", err);
		});
	};

	const disconnectHandler = (event) => {
		provider?.disconnect().catch((err) => {
			console.error("disconnect ERROR:", err);
		});
	};

	const userCheck =
		(userEmail && profile.filter((content) => content.email === userEmail)) ||
		[];

	return (
		<Section id="navbar">
			<div className="wrapper">
				<Link className="d-inline-flex align-items-center" to="/">
					<img className="logo" src="/assets/vectors/logo.svg" alt="logo" />
				</Link>

				<div className="main hide-sm">
					{/* <input type="search" placeholder="Search Here" /> */}

					<div className="nav">
						{(userEmail && userCheck.length && (
							<Link to="/create-new-item">Create</Link>
						)) ||
							""}
						<Link to="/explore">Explore</Link>
						{(userEmail && userCheck.length && (
							<Link to="/profile">Profile</Link>
						)) ||
							""}
						{(userEmail && userCheck.length && <Link to="/cart">Cart</Link>) ||
							""}
						<Link to="/">Resources</Link>
						<a className="dropdown" onClick={showModal} href="#0">
							<img src="/assets/imgs/navbar-account.png" alt="my-account" />
							{(userEmail && userCheck.length && userCheck[0].firstName) ||
								"Login"}

							{user && (
								<div className="dropdown-content">
									<div onClick={logout} className="dropdown-item">
										Logout
									</div>
								</div>
							)}
						</a>
					</div>
					<Link to="#">
						<ReactUIWalletMultiButton />
					</Link>
				</div>

				<div className="show-sm">
					<div
						onClick={toggleSideNav}
						className={clsx("menu btn11", { open: isSideNavActive })}
						data-menu="11"
					>
						<div className="icon-left"></div>
						<div className="icon-right"></div>
					</div>
				</div>

				<div className={clsx("sidenav", { open: isSideNavActive })}>
					<div className="links">
						<Link to="/explore">Explore</Link>
						{(userEmail && userCheck.length && (
							<Link to="/profile">Profile</Link>
						)) ||
							""}
						{(userEmail && userCheck.length && <Link to="/cart">Cart</Link>) ||
							""}
						<Link to="/">Resources</Link>
						<a onClick={showModal} href="#0">
							<img src="./assets/imgs/navbar-account.png" alt="my-account" />
							{(userEmail && userCheck.length && userCheck[0].firstName) ||
								"Login"}
						</a>
					</div>
					<Link to="#">
						<ReactUIWalletMultiButton />
					</Link>
				</div>
			</div>
		</Section>
	);
};

const mapStatetoProps = (state) => {
	return {
		profile: state.reducer.profile,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		gettingData: function (tableName, type) {
			dispatch(gettingData(tableName, type));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Navbar);
