import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import nameIcon from "../../img/nameIcon.png";

import { Container, Img, ContainerForm, InputForm, I } from "./style";

const NavBar = ({ setqueries, characters, setModal }) => {
  //hook to navigate between routes in react-router-dom
  const navigate = useNavigate();
  //state of where the location.path information is saved
  const [Location, setLocation] = useState("");
  //state where the search information is saved
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  //hook to know the route location react-router-dom
  const location = useLocation();
  const URLactual = location.pathname;

  const onSubmitBuscar = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setError(true);
    } else {
      setError(false);
      setModal(true);
      //arrow function to capitalize the first letter of each word
      const NameSarch = search
        ? search.replace(/\b\w/g, (l) => l.toUpperCase())
        : null;

      //function to filter the array of characters and compare it with the  string that the search brings
      const res = characters.filter((character) => {
        return (
          character.name.trim() === NameSarch.trim() ||
          character.status.trim() === NameSarch.trim() ||
          character.species.trim() === NameSarch.trim()
        );
      });

      setqueries(res);
      setSearch("");
    }
  };

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
          <form onSubmit={onSubmitBuscar}>
            <ContainerForm>
              <InputForm
                type="text"
                name="buscar"
                placeholder={error ? "Nombre de personaje" : "Rick Sanchez"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                error={error}
              />
              <button
                type="submit"
                style={{
                  background: "black",
                  textDecoration: "none",
                  border: "none",
                }}
              >
                <I type="submit" className="fas fa-search" />
              </button>
            </ContainerForm>
          </form>
        </Container>
      ) : null}
    </>
  );
};

export default NavBar;
