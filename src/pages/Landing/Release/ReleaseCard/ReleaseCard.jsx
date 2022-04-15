import React from "react";

const ReleaseCard = ({ img, text1, title, text2 }) => {
  return (
    <div className="release-card">
      <div className="card-img">
        <img src={img} alt={title} />
      </div>
      <div className="card-text">
        <p className="xl card-text__sub-title">{text1}</p>
        <h2>{title}</h2>
        <p className="lg">{text2}</p>
      </div>
    </div>
  );
};

export default ReleaseCard;
