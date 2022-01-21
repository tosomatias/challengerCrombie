import React, { useState, useEffect } from "react";

import Home from "./pages/home/index";
import NavBar from "./components/navBar/index";
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = `https://rickandmortyapi.com/api/character/?count=6`;

  useEffect(() => {
    try {
      challenge(url);
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  const challenge = async (url) => {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    setCharacters(data.results);
    setInfo(data.info);
  };
  const handleNextPage = () => {
    challenge(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    challenge(info.prev);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <NavBar title="Rick and Morty" />
      <Home
        characters={characters}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        info={info}
      />
    </>
  );
};

export default App;
