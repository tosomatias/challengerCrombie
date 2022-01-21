import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/home/index";
import NavBar from "./components/navBar/index";
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://rickandmortyapi.com/api/character`;
      axios
        .get(url)
        .then((data) => {
          setCharacters(data.data.results);
          setInfo(data.data.info);
        })

        .catch((error) => {
          console.log(error);
        });
    };
    consultAPI();
  }, [characters, info]);

  return (
    <>
      <NavBar title="Rick and Morty" />
      <Home characters={characters} />
    </>
  );
};

export default App;
