import React from "react";
import { FooterStyles } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        <div className="container">
          <div className="footer-box">
            <div className="footer-left">
              <span> 2022 Creatives</span>
            </div>
            <div className="footer-right">
              <span>Privacy Policy</span>
              <span className="text-right">Terms and Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
