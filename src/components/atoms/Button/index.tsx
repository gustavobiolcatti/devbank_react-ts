import ButtonProps from './types';

import * as S from './styles';

const Button: React.FC<ButtonProps> = ({ buttonType, children }) => {
  return <S.Button buttonType={buttonType}> { children } </S.Button>
}

export default Button;