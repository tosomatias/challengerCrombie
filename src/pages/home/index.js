import React from "react";
import { Container, CharacterCard, Card } from "./style";

const Home = ({ characters }) => {
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
    </Container>
  );
};

export default Home;
