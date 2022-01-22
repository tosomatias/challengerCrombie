import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ImgName } from "./style";
import TitleName from "../../img/name.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ImgName src={TitleName} alt="Rick and Morty" />

      <button onClick={() => navigate("/characters")}>Ver</button>
    </Container>
  );
};

export default Home;
