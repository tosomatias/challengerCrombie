import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 2% 5%;
`;
export const CharacterCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
