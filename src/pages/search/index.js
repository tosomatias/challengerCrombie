import React from "react";
import { Container, CharacterCard, Card } from "./style";

const Search = ({ characters, handlePreviousPage, handleNextPage, info }) => {
  return (
    <Container>
      <CharacterCard>
        {characters.map((item) => (
          <Card key={item.id}>
            <div>
              <img
                src={item.image}
                alt="img characters"
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <p>Name{item.name}</p>
              <p>Species: {item.species}</p>
              <p>Location: {item.location.name}</p>
            </div>
          </Card>
        ))}
      </CharacterCard>
      {info.prev === null ? null : (
        <button onClick={handlePreviousPage}>handlePreviousPage</button>
      )}
      <button onClick={handleNextPage}>handleNextPage</button>
    </Container>
  );
};

export default Search;
