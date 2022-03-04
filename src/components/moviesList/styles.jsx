import styled, { css } from "styled-components"

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const PaginationBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;

    ${props => props.className === 'box-button' && css`
        justify-content: center;
        margin: 10px 0;
    `}
`