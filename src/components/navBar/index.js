import React from "react";

import { Container } from "./style";

const NavBar = ({ title }) => {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
};

export default NavBar;
