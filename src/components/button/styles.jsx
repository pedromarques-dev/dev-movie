import styled, { css } from "styled-components";

export const BoxButton = styled.div`
  display: flex;
  align-items: baseline;

  button,
  p {
    margin: 0 10px;
  }

  button {
    border-style: none;
    background-color: none;
    width: 0;
    cursor: pointer;
  }

  i {
    color: white;
  }
`;
