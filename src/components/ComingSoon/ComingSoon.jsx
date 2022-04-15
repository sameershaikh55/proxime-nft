import React from "react";
import "./comingsoon.css";
import { Link } from "react-router-dom";

const ComingSoon = () => {
	return (
		<div className="maincont">
			<div className="selfcont">
				<div className="containingdiv">
					<h1>Coming Soon</h1>

					<div className="btnsw">
						<Link to="/contact" className="btn py-2 px-4">
							Stay Connected
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComingSoon;
