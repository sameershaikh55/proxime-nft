import React from "react";
import HeroSm from "../../components/HeroSm/HeroSm";

import MainLayout from "../../layouts/MainLayout";
import Drops from "../../partials/Drops/Drops";
import Featured from "../../partials/Featured/Featured";

const Explore = () => {
  return (
    <MainLayout>
      <HeroSm title="Explore" />
      <Drops />
      <Featured />
    </MainLayout>
  );
};

export default Explore;
