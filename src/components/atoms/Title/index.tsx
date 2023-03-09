import * as S from './styles';

import { TitleProps } from './types';

const Title = ({ secondary, children }: TitleProps): JSX.Element => {
  return <S.Title secondary={secondary}>{children}</S.Title>;
};

export default Title;
