import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  aling-items: center;
  text-align: center;
  padding-right: 3.5%;
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
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 8%;
  width: 100%;
  @media (min-width: 992px) {
    margin: 0;
    padding-top: 12%;
  }
`;
export const InputForm = styled.input`
  pointer-events: auto;
  border-radius: 10px;
  width: 160px;
  box-sizing: border-box;
  padding: 2%;
  padding-left: 5%;
  font-weight: 300;
  background-color: white;
  border: none;
  color: black;
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-family: "Poppins", sans-serif;
    color: ${({ error }) => {
      return error ? "red" : "gray";
    }};
  }
  @media (min-width: 992px) {
    font-size: 60px;
    padding: 1%;
    padding-left: 2%;
    margin-right: 2%;
    width: 80%;
  }
`;
export const I = styled.i`
  cursor: pointer;
  font-size: 20px;
  color: #64c09b;
  @media (min-width: 992px) {
    font-size: 80px;
  }
`;
