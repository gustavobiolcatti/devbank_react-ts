import styled, { css } from "styled-components";

import colors from "../../assets/colors";

import ButtonProps from "./types";

export const Button = styled.button<ButtonProps>`
  margin-top: 3em;
  padding: 1em 2em;
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  opacity: .75;
  transition: .2s;

  :hover {
    transform: scale(.98);
    opacity: 1;
  }

  ${({ buttonType }) => buttonType === 'default' && css`
    background-color: ${colors.white};
    border-radius: 5px;
    color: ${colors.black};
  `}

  ${({ buttonType }) => buttonType === 'operation' && css`
    background-color: ${colors.purple};
    border-radius: 15px;
    color: ${colors.white};
  `}
`
