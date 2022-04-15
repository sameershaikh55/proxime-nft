import React from "react";

import MainLayout from "../../layouts/MainLayout";
import Drops from "../../partials/Drops/Drops";
import Featured from "../../partials/Featured/Featured";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import Release from "./Release/Release";

const Landing = () => {
	return (
		<MainLayout>
			<Hero />
			<Release />
			<Drops rootClassName="pt-0" />
			<HowItWorks />
			<Featured />
		</MainLayout>
	);
};

export default Landing;
