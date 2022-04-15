import React from "react";
import clsx from "clsx";

import Section from "../../components/Section/Section";
import MainLayout from "../../layouts/MainLayout";

const LeaderBoard = () => {
  return (
    <MainLayout>
      <Section id="leader-board">
        <h3>Leader Board</h3>

        <div className="tabs">
          <div className="tab active">Autograph</div>
          <div className="tab">Icons</div>
        </div>

        <div className="board-main">
          {[
            {
              id: "board-1",
              img: "./assets/imgs/leader-board-1.png",
              name: "Jane Smith",
              active: true,
            },
            {
              id: "board-2",
              img: "./assets/imgs/leader-board-2.png",
              name: "Erik Jaison",
            },
            {
              id: "board-3",
              img: "./assets/imgs/leader-board-3.png",
              name: "Erik Jaison",
            },
            {
              id: "board-4",
              img: "./assets/imgs/leader-board-4.png",
              name: "Jane Smith",
            },
            {
              id: "board-5",
              img: "./assets/imgs/leader-board-5.png",
              name: "Jane Smith",
            },
          ].map((el, idx) => {
            const { active, id, img, name } = el;

            return (
              <div className={clsx("board-item", { active })} key={id}>
                <div className="board-number">
                  <h3>{idx + 1}</h3>
                </div>
                <div className="board-text">
                  <div className="board-img">
                    <img src={img} alt={name} />
                  </div>
                  <div className="d-flex align-items-center flex-column flex-md-row">
                    <p className="score me-4">Collector's Score</p>
                    <p className="name xl">{name}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="d-flex justify-content-center mt-5 pt-3 mb-4">
            <button className="btn btn-gradient">Explore More</button>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
};

export default LeaderBoard;
