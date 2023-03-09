import styled from 'styled-components';

import colors from 'assets/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h2`
  font-size: 3em;
  font-weight: 600;
`;

export const Balance = styled.span`
  color: ${colors.gray};
  font-size: 1.8em;
  grid-column: auto;
`;

export const BalanceValue = styled.strong`
  color: ${colors.purple};
  font-weight: bold;
`;

export const Options = styled.section`
  display: flex;
`;

export const SeparationOptions = styled.div`
  width: 2.5px;
  height: 3em;
  margin: 0 1em 0 1em;
  background-color: ${colors.gray};
`;
