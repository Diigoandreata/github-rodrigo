import { Error, SearchInput } from "./styles";

type SearchProps = {
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Search = ({ errorMessage, ...props }: SearchProps) => {
  return (
    <>
      <SearchInput {...props} />
      <Error>{errorMessage}</Error>
    </>
  );
};
