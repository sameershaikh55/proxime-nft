import React from "react";
import GridContainer from "../../components/GridContainer/GridContainer";
import HeroSm from "../../components/HeroSm/HeroSm";
import Section from "../../components/Section/Section";
import MainLayout from "../../layouts/MainLayout";

const BlogDetails = () => {
  return (
    <MainLayout>
      <HeroSm title="Blogs Details" />

      <Section id="blog-details">
        <img
          src="./assets/imgs/blog-detail.png"
          alt="blog-img"
          className="w-100 d-block"
        />

        <div className="blog-post">
          <h3>Your Title Here</h3>

          <div className="info">
            <span>
              Posted By: <span className="light">Zen2p</span> &nbsp;&nbsp;{" "}
            </span>
            <span className="mt-sm-0 mt-3">
              <span className="d-sm-inline d-none">| &nbsp;&nbsp;</span> Date:{" "}
              <span className="light">09 OCtober 2022</span>
            </span>
          </div>

          <div className="post-text">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, euismod tincidunt ut
              laoreet dolore,
            </p>

            <p className="quote-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </p>

            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, euismod tincidunt ut
              laoreet dolore,
            </p>
          </div>

          <div className="post-options">
            <div className="btns">
              <button className="btn btn-dark">NFTS</button>
              <button className="btn btn-dark">NFTS</button>
              <button className="btn btn-dark">NFTS</button>
            </div>
            <div className="share">
              <div className="share-text">Share this article: </div>
              <div className="social-btns">
                <div className="btn">
                  <img src="./assets/vectors/share-fb.svg" alt="fb" />
                </div>
                <div className="btn">
                  <img
                    src="./assets/vectors/share-linkedin.svg"
                    alt="linkedin"
                  />
                </div>
                <div className="btn">
                  <img src="./assets/vectors/share-insta.svg" alt="insta" />
                </div>
                <div className="btn">
                  <img src="./assets/vectors/share-twitter.svg" alt="twitter" />
                </div>
              </div>
            </div>
          </div>

          <div className="post-nav">
            <button className="btn btn-light-grey">PREVIOUS POST</button>
            <button className="btn btn-grey">NEXT POST</button>
          </div>
        </div>

        <div className="blog-post-comments-wrapper">
          <h3>3 COMMENTS</h3>

          <div className="comments-main">
            {[
              {
                id: "psot-1",
                img: "./assets/imgs/comment-user-1.png",
                username: "zen2p design",
                date: "15 October 2015",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
              },
              {
                id: "psot-2",
                img: "./assets/imgs/comment-user-2.png",
                username: "zen2p design",
                date: "15 October 2015",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
              },
              {
                id: "psot-3",
                img: "./assets/imgs/comment-user-3.png",
                username: "zen2p design",
                date: "15 October 2015",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
              },
            ].map((el) => {
              const { id, img, username, date, text } = el;

              return (
                <div className="comment-item" key={id}>
                  <div className="img">
                    <img src={img} alt={username} />

                    <div className="btn">REPLY</div>
                  </div>
                  <div className="comment-text">
                    <h4>{username}</h4>
                    <h5 className="date">{date}</h5>
                    <p>{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="leave-comment">
          <h3>LEAVE YOUR COMMENTS</h3>

          <GridContainer rowClassName="g-5">
            <div className="col-md-6">
              <input type="text" placeholder="YOUR NAME *" />
            </div>
            <div className="col-md-6">
              <input type="email" placeholder="YOUR E-MAIL *" />
            </div>
            <div className="col-md-6">
              <input type="email" placeholder="PHONE" />
            </div>
            <div className="col-md-6">
              <input type="email" placeholder="SUBJECT" />
            </div>
            <div className="col-12">
              <textarea
                name="messenger"
                id="messenger"
                rows="5"
                placeholder="MESSENGER"
              ></textarea>
            </div>
          </GridContainer>

          <button className="btn btn-dark">SUBMIT COMMENT</button>
        </div>
      </Section>
    </MainLayout>
  );
};

export default BlogDetails;
