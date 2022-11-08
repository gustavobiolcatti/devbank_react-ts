import InputProps from './types'

import * as S from './styles'

const Input: React.FC<InputProps> = ({ inputType, ...rest }) => {
  return <S.Input inputType={inputType} {...rest}></S.Input>
}

export default Input;