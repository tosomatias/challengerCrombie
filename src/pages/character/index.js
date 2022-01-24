import React from "react";
import Consultas from "./Consultas";

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
  Live,
  I,
} from "./style";
import Logo from "../../img/Await.png";

const Search = ({
  characters,
  handleNextPage,
  loading,
  queries,
  setModal,
  modal,
}) => {
  return (
    <>
      {!loading ? (
        <Container>
          {modal ? (
            queries.map((query) => (
              <Consultas key={query.id} query={query} setModal={setModal} />
            ))
          ) : (
            <CharacterCard>
              {characters.map((character) => (
                <Card key={character.id}>
                  <ImgCard src={character.image} alt="img characters" />
                  <div>
                    <InfoCard name="true">{character.name}</InfoCard>

                    <InfoCard>
                      <i className="fas fa-atom" />
                      Status: {character.status}
                      {character.status === "Dead" ? (
                        <I className="fas fa-circle" />
                      ) : (
                        <Live className="fas fa-circle" />
                      )}
                    </InfoCard>
                    <InfoCard>
                      <i className="fas fa-atom" />
                      Species: {character.species}
                    </InfoCard>
                  </div>
                </Card>
              ))}
            </CharacterCard>
          )}

          {modal ? null : <Button onClick={handleNextPage}>Cargar Más</Button>}
        </Container>
      ) : (
        <ContainerAwait>
          <ImgAwait src={Logo} alt="img characters" />
          <TextAwait>Cargando </TextAwait>
        </ContainerAwait>
      )}
    </>
  );
};

export default Search;
