import React from "react";
import TeamStyled from "./TeamStyled";
import data from "../../Data/Team.json";
const Team = () => {
  const renderItem = data.map((item, index) => {
    return (
      <div className="teams--item" key={index}>
        <img src={item.image} alt="" />
        <div className="box">
          <h3>Jhon Doe</h3>
          <span>Digital Marketing Manager</span>
        </div>
      </div>
    );
  });
  return (
    <TeamStyled>
      <div className="teams">
        <h2>Our Team</h2>

        <p className="desc-title container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div className="teams-list">{renderItem}</div>
      </div>
    </TeamStyled>
  );
};

export default Team;
