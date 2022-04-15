import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Section from "../../../components/Section/Section";
import GridContainer from "../../../components/GridContainer/GridContainer";
import ReleaseCard from "./ReleaseCard/ReleaseCard";

const Release = () => {
  return (
    <Section id="release">
      <GridContainer rowClassName="gy-4">
        <div className="col-lg-6">
          <h3 className="title">Next Release in 6 hrs 26 mins</h3>

          <div className="release-cards">
            <Swiper pagination={true} modules={[Pagination]} slidesPerView={1}>
              {[
                {
                  id: "release-slide-1",
                  img: "./assets/imgs/release-1.png",
                  text1: "Starts in 6 hrs 26 mins",
                  title: "Richard Charles",
                  text2: "Lorem Ipsum Dolor Sit Amet Contect Etur Adisciping",
                },
                {
                  id: "release-slide-2",
                  img: "./assets/imgs/release-1.png",
                  text1: "Starts in 6 hrs 26 mins",
                  title: "Richard Charles",
                  text2: "Lorem Ipsum Dolor Sit Amet Contect Etur Adisciping",
                },
                {
                  id: "release-slide-3",
                  img: "./assets/imgs/release-1.png",
                  text1: "Starts in 6 hrs 26 mins",
                  title: "Richard Charles",
                  text2: "Lorem Ipsum Dolor Sit Amet Contect Etur Adisciping",
                },
              ].map((el, idx) => {
                return (
                  <SwiperSlide key={el.id}>
                    <ReleaseCard {...el} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="title">Live in 6 hrs 26 mins</h3>

          <div className="release-cards">
            <Swiper pagination={true} modules={[Pagination]} slidesPerView={1}>
              {[
                {
                  id: "live-slide-1",
                  img: "./assets/imgs/release-2.png",
                  text1: "Starts in 6 hrs 26 mins",
                  title: "Richard Charles",
                  text2: "Lorem Ipsum Dolor Sit Amet Contect Etur Adisciping",
                },
                {
                  id: "live-slide-2",
                  img: "./assets/imgs/release-2.png",
                  text1: "Starts in 6 hrs 26 mins",
                  title: "Richard Charles",
                  text2: "Lorem Ipsum Dolor Sit Amet Contect Etur Adisciping",
                },
                {
                  id: "live-slide-3",
                  img: "./assets/imgs/release-2.png",
                  text1: "Starts in 6 hrs 26 mins",
                  title: "Richard Charles",
                  text2: "Lorem Ipsum Dolor Sit Amet Contect Etur Adisciping",
                },
              ].map((el, idx) => {
                return (
                  <SwiperSlide key={el.id}>
                    <ReleaseCard {...el} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Release;
