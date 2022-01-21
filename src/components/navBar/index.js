import React from "react";
import imgIcon from "../../img/img1.png";
import imgIcon2 from "../../img/img2.png";
import { Container, Img } from "./style";

const NavBar = ({ title }) => {
  return (
    <Container>
      <Img src={imgIcon2} alt="img Icon" />
      <h3>{title}</h3>
      <Img src={imgIcon} alt="img Icon" />
    </Container>
  );
};

export default NavBar;
