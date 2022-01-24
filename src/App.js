import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import NavBar from "./components/navBar/index";
import Characters from "./pages/character/index";
const App = () => {
  //state where the list of characters is saved
  const [characters, setCharacters] = useState([]);
  //state where the list of page is saved
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  //state where the list of characters is saved as a result of the search
  const [queries, setqueries] = useState([]);
  //status that enables the card where the characters that arise from the search of the navBar are shown
  const [modal, setModal] = useState(false);
  //Api rest
  const url = `https://rickandmortyapi.com/api/character`;

  useEffect(() => {
    try {
      challenge(url);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [url]);
  //arrow function to query the api
  const challenge = async (url) => {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    setCharacters(characters.concat(data.results));
    setInfo(data.info);
  };
  //arrow function to show more characters
  const handleNextPage = () => {
    challenge(info.next);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          characters={characters}
          setqueries={setqueries}
          setModal={setModal}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/characters"
            element={
              <Characters
                characters={characters}
                handleNextPage={handleNextPage}
                info={info}
                loading={loading}
                queries={queries}
                modal={modal}
                setModal={setModal}
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
