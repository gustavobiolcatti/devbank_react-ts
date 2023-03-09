import colors from 'assets/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: ${colors['light-gray']};
`;

export const Content = styled.div`
  display: flex;
  width: calc(100% - 200px);
  padding: 0 2em;
  left: 200px;
  flex-direction: column;
`;
