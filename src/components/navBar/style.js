import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  aling-items: center;
  text-align: center;
  padding-right: 7%;
  @media (min-width: 992px) {
    padding-right: 6%;
  }
`;
export const Img = styled.img`
  width: 45%;
  @media (min-width: 992px) {
    width: 20%;
    cursor: pointer;
    padding-left: 2%;
    :hover {
      transform: scale(1.3);
      transition: transform 0.8s ease-in-out;
    }
  }
`;
export const Tilte = styled.h2`
  color: #64c09b;
  font-size: 15px;
  padding-top: 2%;
  @media (min-width: 992px) {
    font-size: 60px;
  }
`;
