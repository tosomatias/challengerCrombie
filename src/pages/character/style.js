import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 7%;
  animation-name: animar;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;

  @keyframes animar {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
export const CharacterCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  border: 2px solid white;
  text-align: flex-start;
  background-color: black;
  padding: 5%;

  margin: 0;
`;

export const ContainerAwait = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5%;
  padding-top: 25%;
`;

export const ImgAwait = styled.img`
  width: 100%;
`;
export const TextAwait = styled.h2`
  color: white;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  animation-name: animar;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  @keyframes animar {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const TextTitle = styled.h1`
  font-family: "Sedgwick Ave", cursive;
  color: #64c09b;
  font-size: 42px;
  text-align: center;
  font-weight: bold;
  font-style: italic;
`;
export const ImgCard = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 3%;
`;

export const InfoCard = styled.p`
  font-family: "Oswald", sans-serif;
  color: white;

  font-size: ${({ name }) => (name ? "32px" : "16px")};
  text-align: start;
  font-weight: 600;
  padding-left: 1%;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5% 0;
`;
export const Button = styled.i`
  color: #64c09b;

  font-size: 40px;
`;
