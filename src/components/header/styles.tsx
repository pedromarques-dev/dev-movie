import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #161515;
  padding: 40px;

  h1 {
    color: #c22b2bca;
    font-size: 40px;
  }

  ul {
    display: flex;
  }

  li {
    margin: 10px;
    border-radius: 20px;
    padding: 10px 20px;
    transition: 0.3s ease-in-out;
  }

  li:hover {
    background-color: #ffffff;
  }

  li:hover a {
    color: black;
  }

  a {
    font-size: 15px;
  }

  @media (max-width: 1186px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 776px) {
    ul {
      flex-direction: column;
      text-align: center;
    }

    li {
      margin: 5px;
      padding: 5px;
    }
  }
`;
