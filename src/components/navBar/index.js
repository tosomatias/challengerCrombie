import React from "react";
import RickSanchez from "../../img/rick.jpg";

import { Container, Img } from "./style";

const NavBar = ({ title }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <Img src={RickSanchez} alt="" />
    </Container>
  );
};

export default NavBar;
