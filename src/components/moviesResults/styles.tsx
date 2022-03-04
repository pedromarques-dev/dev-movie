import styled from "styled-components";

export const Section = styled.section`
  color: white;
  padding: 20px;

  div {
    text-align: center;
    padding: 20px;
  }

  img {
    width: 250px;
    height: 300px;
    transition: 0.2s ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
