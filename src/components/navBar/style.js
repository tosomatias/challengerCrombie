import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  aling-items: center;
  text-align: flex-start;
`;
export const Img = styled.img`
  width: 45%;
  @media (min-width: 992px) {
    width: 20%;
    cursor: pointer;
    :hover {
      transform: scale(1.3);
      transition: transform 0.8s ease-in-out;
    }
  }
`;
