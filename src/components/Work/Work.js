import React from "react";
import { Link } from "react-router-dom";
import { WorkStyled } from "./WorkStyled";
import data from "../../Data/Work.json";
const Work = () => {
  const renderItem = data.map((item, index) => {
    return (
      <div className="work--item" key={index}>
        <img src={item.image} alt="" />
        <div className="box">
          <h3>{item.title}</h3>
          <p className="box-text">{item.description}</p>
          <Link className="box-arrow">
            See Project<i class="icon-arrow fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <WorkStyled>
      <div className="work">
        <h2>Work</h2>
        <div className="work-list">{renderItem}</div>
      </div>
    </WorkStyled>
  );
};

export default Work;
