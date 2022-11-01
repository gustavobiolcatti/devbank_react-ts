import * as S from './styles'

type CardSpanProps = React.HTMLProps<HTMLSpanElement> & {}

const CardSpan: React.FC<CardSpanProps> = ({ children }) => {
  return <S.CardSpan> { children } </S.CardSpan>
}

export default CardSpan;