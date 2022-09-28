import React from "react";
import Header from "../Header/Header";
import { Work } from "../Work";
import { Services } from "../Services";
import { Team } from "../Team";
import { Contact } from "../Contact";
const Layout = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Work></Work>
      <Services></Services>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
};

export default Layout;
