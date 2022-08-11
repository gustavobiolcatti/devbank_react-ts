import styled from "styled-components";

const Button = styled.button`
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

export default Button