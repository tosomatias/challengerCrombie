import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ImgName, ImgIcon, Button } from "./style";
import TitleName from "../../img/nameIcon.png";
import IconLogo from "../../img/IconLogo.png";

const Home = () => {
  const navigate = useNavigate();
  //state to activate the button animation on home
  const [animation, setAnimation] = useState(false);
  //arrow function that enables the button animation, plus a setTimeOut to perform a page redirect
  const goAnimation = () => {
    setAnimation(true);
    setTimeout(() => {
      navigate("/characters");
    }, 1000);
  };

  return (
    <Container>
      <div>
        <ImgName src={TitleName} alt="Rick and Morty Name" />
        <ImgIcon src={IconLogo} alt="Rick and Morty img " />
      </div>

      <Button onClick={goAnimation} animation={animation}>
        VER PERSONAJES
      </Button>
    </Container>
  );
};

export default Home;
