import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 4%;
  @media (min-width: 992px) {
    flex-direction: row;
    padding-top: 1%;
    padding-right: 20%;
    padding-left: 5%;
    justify-content: space-between;
  }
`;

export const ImgName = styled.img`
  width: 100%;
`;
export const ImgIcon = styled.img`
  width: 80%;
  animation-name: animar;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
  @media (min-width: 992px) {
    width: 50%;
    animation-duration: 1s;
  }

  @keyframes animar {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }
`;
export const Button = styled.button`
  pointer-events: auto;
  text-align: center;
  border: 2px solid #64c09b;
  border-radius: 20px;
  color: white;
  background-color: #64c09b;
  margin-top: 20%;
  cursor: pointer;
  padding: 1%;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
  width: 60%;
  text-align: center;
  :focus {
    outline: none;
  }

  transition: transform 0.8s ease-in-out;
  transform: ${({ animation }) =>
    animation ? "translateX(-300%)" : "translateX(0)"};
  @media (min-width: 992px) {
    :hover {
      color: #64c09b;
      background-color: transparent;
    }
    margin-top: 20%;
    font-size: 82px;
    width: 40%;
    border-radius: 40px;

    transition: transform 3s ease-in-out;
    transform: ${({ animation }) =>
      animation ? "rotate(2000deg)" : "rotate(0)"};
  }
`;
