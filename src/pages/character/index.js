import React from "react";

import {
  Container,
  CharacterCard,
  Card,
  ContainerAwait,
  ImgAwait,
  TextAwait,
  ImgCard,
  InfoCard,
  Button,
  ContainerButton,
} from "./style";
import Logo from "../../img/Await.png";

const Search = ({
  characters,
  handlePreviousPage,
  handleNextPage,
  info,
  cargando,
}) => {
  return (
    <>
      {!cargando ? (
        <Container>
          <CharacterCard>
            {characters.map((character) => (
              <Card key={character.id}>
                <ImgCard src={character.image} alt="img characters" />
                <div>
                  <InfoCard name="true">{character.name}</InfoCard>
                  <InfoCard>
                    <i className="fas fa-atom" />
                    Status: {character.status}
                  </InfoCard>
                  <InfoCard>
                    <i className="fas fa-atom" />
                    Species: {character.species}
                  </InfoCard>
                  <InfoCard>
                    <i className="fas fa-atom" />
                    Location: {character.location.name}
                  </InfoCard>
                </div>
              </Card>
            ))}
          </CharacterCard>

          {info.prev === null ? (
            <ContainerButton>
              <Button
                className="fas fa-arrow-circle-right"
                onClick={handleNextPage}
              />
            </ContainerButton>
          ) : (
            <ContainerButton>
              <Button
                className="fas fa-arrow-circle-left"
                onClick={handlePreviousPage}
              />

              <Button
                className="fas fa-arrow-circle-right"
                onClick={handleNextPage}
              />
            </ContainerButton>
          )}
        </Container>
      ) : (
        <ContainerAwait cargando={cargando}>
          <ImgAwait src={Logo} alt="img characters" />
          <TextAwait>Cargando </TextAwait>
        </ContainerAwait>
      )}
    </>
  );
};

export default Search;
