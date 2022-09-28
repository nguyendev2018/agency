import React from "react";
import Banner from "./Banner/Banner";
import { HeaderStyle } from "./HeaderStyle";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
    </>
  );
};

export default Header;
