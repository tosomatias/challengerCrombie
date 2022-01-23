import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import nameIcon from "../../img/nameIcon.png";

import { Container, Img } from "./style";

const NavBar = () => {
  const navigate = useNavigate();
  const [Location, setLocation] = useState("");
  const location = useLocation();
  const URLactual = location.pathname;

  useEffect(() => {
    setLocation(URLactual);
  }, [URLactual, setLocation]);

  return (
    <>
      {Location === "/characters" ? (
        <Container>
          <Img
            src={nameIcon}
            alt="Rick and Morty"
            onClick={() => navigate("/")}
          />
        </Container>
      ) : null}
    </>
  );
};

export default NavBar;
