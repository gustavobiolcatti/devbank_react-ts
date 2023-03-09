import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputType: 'default' | 'operation';
};

export default InputProps;
