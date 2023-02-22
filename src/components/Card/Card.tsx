import { Container } from "./styles";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, ...rest }: CardProps) => {
  return <Container {...rest}>{children}</Container>;
};
