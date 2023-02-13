import styled from "styled-components";

import colors from "assets/colors";

export const Card = styled.div`
  display: flex;
  width: 30%;
  padding: 3em 5em;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 0 10px -5px ${colors.black};
`