import styled from "styled-components";

export const Section = styled.section`
  text-align: center;

  input {
    width: 600px;
    padding: 8px;
    border-radius: 20px;
    margin-top: 10px;
  }

  @media (max-width: 632px) {
    text-align: center;
    input {
      width: 90%;
    }
  }
`;
