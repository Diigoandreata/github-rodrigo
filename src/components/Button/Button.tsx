import { Content } from "./styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <Content {...rest}>{children}</Content>;
};
