import ButtonProps from './types';

import * as S from './styles';

const Button: React.FC<ButtonProps> = ({ buttonType, children, ...rest }) => {
  return (
    <S.Button buttonType={buttonType} {...rest}>
      {' '}
      {children}{' '}
    </S.Button>
  );
};

export default Button;
