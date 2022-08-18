import styled from 'styled-components';

export const InputStyled = styled.input`
    width: 100%;
    padding: 1em;
    margin-top: 1em;
    border: none;
    background: none;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    border-bottom: 1px solid #ffffff68;
    opacity: 0.5;

    ::placeholder {
        color: #fff;
    }

    &:focus {
        border-bottom: 1px solid #ffffff;
        opacity: 1;
    }
`;

export const InputOperation = styled.input`
    width: 100%;
    padding: 1em;
    margin-top: 1em;
    border: none;
    background: none;
    color: #000;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    border-bottom: 3px solid blueviolet;
    opacity: 0.5;

    ::placeholder {
        text-align: center;
    }

    &:focus {
        opacity: 1;
    }
`;