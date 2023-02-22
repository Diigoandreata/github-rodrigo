import { Control, Controller, FieldErrors } from "react-hook-form";

import { UserDTO } from "../../types/users";

import { Button } from "../Button";
import { Search } from "../Search";
import { HeaderWrapper, Subtitle, Title } from "./styles";

export type UserFinderProps = {
  isFetching: boolean;
  errors: FieldErrors<UserDTO>;
  control?: Control<UserDTO>;
  hasData: boolean;
};

export const UserFinder = ({
  isFetching,
  errors,
  control,
  hasData,
}: UserFinderProps) => {
  return (
    <>
      <HeaderWrapper>
        <Title>Usuários do Github</Title>
        <Subtitle>
          Utilize o campo abaixo para buscar por usuários no Github.
        </Subtitle>
      </HeaderWrapper>

      <Controller
        control={control}
        name="username"
        render={({ field }) => (
          <Search
            placeholder="Digite o nome do usuário"
            id="username"
            errorMessage={errors.username?.message}
            autoComplete="off"
            {...field}
          />
        )}
      />

      <Button disabled={isFetching || hasData}>
        {isFetching ? "Carregando" : "Buscar"}
      </Button>
    </>
  );
};
