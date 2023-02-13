import { HTMLAttributes } from "react";

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  secondary?: boolean;
}