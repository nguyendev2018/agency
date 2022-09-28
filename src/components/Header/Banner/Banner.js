import React from "react";
import { BannerStyled } from "./BannerStyled";

const Banner = () => {
  return (
    <BannerStyled>
      <div className="banner ">
        <div className="container">
          <h1>
            Creative
            <br /> Innovative <br />
            aDesign Agency
          </h1>
          <p className="banner-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </BannerStyled>
  );
};

export default Banner;
