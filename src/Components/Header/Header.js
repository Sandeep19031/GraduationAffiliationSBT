import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

import logo from "../../Theme/Assets/Images/logo.svg";
import "./HeaderStyle.scss";

const Header = () => {
  const location = useLocation();
  console.log("location", location?.pathname);
  return (
    <Navbar className="header-style">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="d-block mx-auto mb-1" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
