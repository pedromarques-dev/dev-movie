import styled from "styled-components"

export const Section = styled.section`
    padding-left: 30px;

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
        color: white;
    }

    div {
        display: flex;
        flex-wrap: wrap;
    }

`