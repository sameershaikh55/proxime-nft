import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Section from "../../components/Section/Section";

const Drops = ({ rootClassName }) => {
  return (
    <Section id="drops" rootClassName={rootClassName}>
      <h2>Featured Drops</h2>

      <div className="drops-cards mt-4 pt-2">
        <Swiper
          // direction={"vertical"}
          autoHeight={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[
            {
              id: "drops-1",
              img: "./assets/imgs/drops-1.png",
              title: "Richard Charles",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              id: "drops-2",
              img: "./assets/imgs/drops-1.png",
              title: "Richard Charles",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              id: "drops-3",
              img: "./assets/imgs/drops-1.png",
              title: "Richard Charles",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ].map((el, idx) => {
            const { title, text, img } = el;

            return (
              <SwiperSlide key={el.id}>
                <div className="drops-card">
                  <div className="card-img">
                    <img src={img} alt={title} />
                  </div>
                  <div className="card-text">
                    <h2>{title}</h2>
                    <p>{text}</p>

                    <div className="mt-md-0 mt-4 d-flex justify-content-center justify-content-sm-between align-items-center mt-3 flex-sm-row flex-column">
                      <a className="d-block me-4 p-2 py-1" href="#0">
                        Design Yours Today
                      </a>
                      <button className="mt-4 mt-sm-0 btn btn-gradient">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
};

export default Drops;
