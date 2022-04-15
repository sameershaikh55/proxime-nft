import React from "react";

import Section from "../../../components/Section/Section";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="text">
        <h1>FOR CREATORS BY CREATORS</h1>
        <p className="mt-2 my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        <button className="mt-2 btn btn-gradient">View Marketplace</button>
      </div>
    </Section>
  );
};

export default Hero;
