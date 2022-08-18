import styled, { css } from "styled-components";

export const Button = styled.button`
    margin-top: 3em;
    padding: 1em 2em;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    color: #000;
    font-size: 1.5em;
    font-weight: bold;
    opacity: .75;
    transition: .2s;

    :hover {
        transform: scale(.98);
        opacity: 1;
    }
`

export const ButtonOperation = styled.button`
    margin-top: 3em;
    padding: 1em 2em;
    background-color: blueviolet;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    opacity: .75;
    transition: .2s;

    :hover {
        transform: scale(.98);
        opacity: 1;
    }

    ${props => props.disabled && css`
        cursor: not-allowed;
    `}
`