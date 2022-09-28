import React from "react";
import ServicesStyled from "./ServicesStyled";
import data from "../../Data/Service.json";
import { Link } from "react-router-dom";
const Services = () => {
  const renderItem = data.map((item, index) => {
    return (
      <div className="services--item">
        <div className="services--item__header">
          <h3 className="title">{item.title}</h3>
          <p className="desc">{item.desc}</p>
          <Link className="box-arrow">
            See Details <i class="icon-arrow fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="services--item__bottom">
          <span>Starting at $400</span>
        </div>
      </div>
    );
  });
  return (
    <ServicesStyled>
      <div className="services">
        <h2>Services</h2>
        <div className="container">
          <div className="services-list">{renderItem}</div>
        </div>
      </div>
    </ServicesStyled>
  );
};

export default Services;
