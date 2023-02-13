import styled, { css } from "styled-components";

import colors from "assets/colors";

import { TableColumnProps } from "./types";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

export const Table = styled.table`
  width: 100%;
  align-self: flex-start;
  text-align: center;
  font-size: 2em;

  tbody tr:nth-child(odd) {
    backdrop-filter: brightness(0.9);
  }
`;

export const TableColumn = styled.td<TableColumnProps>`
  ${({type}) => css`
    padding: .75em 0;
    color: ${type === 'expense' ? colors.red : colors.green}
  `}
`;