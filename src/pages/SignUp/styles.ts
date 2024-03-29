import styled from 'styled-components';

import colors from 'assets/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('src/assets/img/bg3.jpg');
`;

export const Form = styled.form`
  display: flex;
  width: 30%;
  padding: 2em 4em;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  backdrop-filter: blur(0.3em) brightness(0.5);
  box-shadow: 0 0 50px -20px ${colors.black};
`;
