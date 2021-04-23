//TODO: set NavbarBrand to go to home page and export Header

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="secondary" light>
      <NavbarBrand tag={Link} to="/" className="text-white">
        My Contact App
      </NavbarBrand>
      <NavbarText className="text-white float-right">
        A Simple Contact app
      </NavbarText>
    </Navbar>
  );
};

export default Header;
