import InputProps from './types'

import * as S from './styles'

const Input: React.FC<InputProps> = ({ inputType, children }) => {
  return <S.Input inputType={inputType}> { children } </S.Input>
}

export default Input;