import styled from "styled-components";

export const Section = styled.section`

  img {
    transform: scale(0.9);
    transition: 0.2s ease-in-out;
    cursor: pointer;
    height: 300px;
  }

  img:hover {
    transform: scale(1.05);
  }

  h2 {
    margin-top: 25px;
    padding: 0 70px;
    color: white;
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding:10px;
  }

  @media (max-width: 776px){
      h2{
          text-align:center;
      }
  }
`;
