import React from "react";

import GridContainer from "../../../components/GridContainer/GridContainer";
import Section from "../../../components/Section/Section";

const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <div className="text-center">
        <h2>How It Works</h2>

        <p className="section-sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>

      <div className="cards-container">
        <GridContainer rowClassName="card-row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="card">
              <div className="number">1</div>

              <div className="img">
                <img src="./assets/vectors/how-it-works-1.svg" alt="vector" />
              </div>

              <div className="text">
                <h5>Grab Iconic Collectibles</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card">
              <div className="number">2</div>

              <div className="img">
                <img src="./assets/vectors/how-it-works-2.svg" alt="vector" />
              </div>

              <div className="text">
                <h5>Unlock A-List Experiences</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card">
              <div className="number">3</div>

              <div className="img">
                <img src="./assets/vectors/how-it-works-3.svg" alt="vector" />
              </div>

              <div className="text">
                <h5>Join The Community</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
          <img
            className="bg-2"
            src="./assets/vectors/bg-steps-cards.svg"
            alt="bg"
          />
        </GridContainer>
      </div>

      <div className="text-center">
        <h2>JOIN THE THETADROP COMMUNITY</h2>

        <p className="section-sub-title">
          Be the first to know about upcoming drops
        </p>

        <div className="join-mailing-list">
          <input type="email" placeholder="Enter Email Address" />

          <button className="btn btn-gradient">
            <img
              style={{ marginRight: 12 }}
              src="./assets/vectors/btn-subscribe.svg"
              alt="send"
            />
            Subscribe
          </button>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
