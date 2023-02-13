import styled, { css } from "styled-components";

import colors from "assets/colors";

import { TitleProps } from "./types";

export const Title = styled.h1<TitleProps>`
  margin-bottom: 1em;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;

  ${({secondary}) => secondary && css`
    color: ${colors.white}
  `}
`;