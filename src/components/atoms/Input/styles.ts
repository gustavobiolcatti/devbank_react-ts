import styled, { css } from 'styled-components';

import colors from 'assets/colors';

import InputProps from './types';

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  border: none;
  background: none;
  font-weight: bold;
  opacity: 0.5;

  ${({ inputType }) =>
    inputType === 'default' &&
    css`
      color: ${colors.white};
      font-size: 1.5em;
      border-bottom: 1px solid ${colors.transparent};

      ::placeholder {
        color: ${colors.white};
      }

      &:focus {
        border-bottom: 1px solid ${colors.white};
        opacity: 1;
      }
    `}

  ${({ inputType }) =>
    inputType === 'operation' &&
    css`
      color: ${colors.black};
      font-size: 2em;
      border-bottom: 3px solid ${colors.purple};
      text-align: center;

      ::placeholder {
        text-align: center;
      }

      &:focus {
        opacity: 1;
      }
    `}
`;
