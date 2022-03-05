import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  margin-top: 10px;

  input {
    width: 600px;
    padding: 8px;
    border-radius: 20px;
    margin-top: 10px;
    background-color: #111111;
    color: white;
    border:1px double #9c2525;
    padding-left: 20px;
  }

  input::-webkit-input-placeholder{
    color:white;
}

  @media (max-width: 632px) {
    text-align: center;
    input {
      width: 90%;
    }
  }
`;
