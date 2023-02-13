import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.div`
  display: flex;
  width: 300px;
  height: 100%;
  flex-direction: column;
  background-color: ${colors.gray};
  box-shadow: 0 0 50px -25px #000;
`;

export const Title = styled.h1`
  margin: 1em 0;
  align-self: center;
  font-size: 4em;
`;

export const LinkText = styled.span`
  margin-left: 1em;
`;