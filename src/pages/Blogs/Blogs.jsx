import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import GridContainer from "../../components/GridContainer/GridContainer";
import HeroSm from "../../components/HeroSm/HeroSm";
import Section from "../../components/Section/Section";
import MainLayout from "../../layouts/MainLayout";

const Blogs = () => {
  return (
    <MainLayout>
      <HeroSm title="Blogs" />

      <Section id="blogs">
        <GridContainer rowClassName="gy-4">
          {[
            {
              id: "blogs-1",
              img: "./assets/imgs/featured-edition-1.png",
              title: "Your Title Here",
              text: "Placeholder text is the label for possible content in a text box. It can normally be found Placeholder.Placeholder text is the label for possible.",
              date: "07-june-2022",
              active: true,
            },
            {
              id: "blogs-2",
              img: "./assets/imgs/featured-edition-2.png",
              title: "Your Title Here",
              text: "Placeholder text is the label for possible content in a text box. It can normally be found Placeholder.Placeholder text is the label for possible.",
              date: "07-june-2022",
            },
            {
              id: "blogs-3",
              img: "./assets/imgs/featured-edition-3.png",
              title: "Your Title Here",
              text: "Placeholder text is the label for possible content in a text box. It can normally be found Placeholder.Placeholder text is the label for possible.",
              date: "07-june-2022",
            },
            {
              id: "blogs-4",
              img: "./assets/imgs/featured-edition-1.png",
              title: "Your Title Here",
              text: "Placeholder text is the label for possible content in a text box. It can normally be found Placeholder.Placeholder text is the label for possible.",
              date: "07-june-2022",
            },
            {
              id: "blogs-5",
              img: "./assets/imgs/featured-edition-2.png",
              title: "Your Title Here",
              text: "Placeholder text is the label for possible content in a text box. It can normally be found Placeholder.Placeholder text is the label for possible.",
              date: "07-june-2022",
            },
            {
              id: "blogs-6",
              img: "./assets/imgs/featured-edition-3.png",
              title: "Your Title Here",
              text: "Placeholder text is the label for possible content in a text box. It can normally be found Placeholder.Placeholder text is the label for possible.",
              date: "07-june-2022",
            },
          ].map((el, idx) => {
            const { id, active, img, title, date, text } = el;

            return (
              <div className="col-xl-4 col-md-6" key={id}>
                <div className={clsx("blog-item", { active })}>
                  <div className="img">
                    <img src={img} alt={title} />
                  </div>
                  <div className="blog-body">
                    <div className="info">
                      <div className="date">
                        <img
                          src="./assets/vectors/blog-calendar.svg"
                          alt="calendar"
                        />
                        {date}
                      </div>
                      <div className="comments">
                        <img
                          src="./assets/vectors/blog-comments.svg"
                          alt="calendar"
                        />
                        comments
                      </div>
                    </div>

                    <div className="main">
                      <h4>{title}</h4>

                      <p className="sm">{text}</p>

                      <Link to="#0">
                        Read More
                        <img
                          className="ms-4"
                          src="./assets/vectors/read-more-right.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </GridContainer>
      </Section>
    </MainLayout>
  );
};

export default Blogs;
