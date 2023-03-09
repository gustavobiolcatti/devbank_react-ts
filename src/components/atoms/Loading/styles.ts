import styled from 'styled-components';

import colors from 'assets/colors';

export const Loading = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 45%;
  left: 45%;
  border: 7px solid ${colors.gray};
  border-radius: 50%;
  border-top-color: ${colors.blue};
  animation: rotate 1s infinite;
  margin: auto;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }

  @media (max-width: 768px) {
    .load {
      left: 40%;
    }
  }
`;
