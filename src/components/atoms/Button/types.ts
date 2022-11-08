import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType: 'default' | 'operation',
}

export default ButtonProps;