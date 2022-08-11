import styled from 'styled-components';

const InputStyled = styled.input`
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

export default InputStyled