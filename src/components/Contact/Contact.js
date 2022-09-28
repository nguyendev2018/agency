import React from "react";
import { ContactStyle } from "./ContactStyled";
import data from "../../Data/Contact.json";
const Contact = () => {
  const renderItem = data.map((item, index) => {
    return (
      <div className="social--item">
        <span>{item.social}</span>
      </div>
    );
  });
  return (
    <ContactStyle>
      <div className="contacts">
        <h2>Contact</h2>
        <div className="container">
          <div className="info">
            <p>contact@website.com</p>
            <p style={{ marginTop: "12px" }}>+0 0000 0000</p>
          </div>
          <div className="social-list">{renderItem}</div>
        </div>
      </div>
    </ContactStyle>
  );
};

export default Contact;
