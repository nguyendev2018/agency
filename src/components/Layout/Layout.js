import React from "react";
import Header from "../Header/Header";
import { Work } from "../Work";
import { Services } from "../Services";
import { Team } from "../Team";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
const Layout = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Work></Work>
      <Services></Services>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
