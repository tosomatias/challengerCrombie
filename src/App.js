import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import NavBar from "./components/navBar/index";
import Characters from "./pages/character/index";
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const url = `https://rickandmortyapi.com/api/character`;

  useEffect(() => {
    try {
      challenge(url);
      setCargando(false);
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
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/characters"
            element={
              <Characters
                characters={characters}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                info={info}
                cargando={cargando}
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
