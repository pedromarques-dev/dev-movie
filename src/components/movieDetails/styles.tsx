import styled from "styled-components";

export const Section = styled.section`
    color: white;
    display: flex;
    align-items:flex-start;
    padding: 20px;

    section{
        text-align: center;
    } 

    h2 {
        margin: 20px 0;
        font-size: 23px;
    }

    li{
        list-style: square;
    }

    div {
        margin: 30px 30px 0 0;
        width: 100%;
        text-align: left;
    }

    img {
        width: 45%;
    }

    p{
        text-align: justify;
        font-size: 20px;
    }
`