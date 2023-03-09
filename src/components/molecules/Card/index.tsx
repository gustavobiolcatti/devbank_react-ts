import * as S from './styles';

type CardProps = React.HTMLProps<HTMLDivElement> & {};

const Card: React.FC<CardProps> = ({ children }) => {
  return <S.Card> {children} </S.Card>;
};

export default Card;
