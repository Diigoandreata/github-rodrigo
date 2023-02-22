import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Card } from "../../components/Card";
import { UserFinder } from "../../components/UserFinder";
import { UserResult } from "../../components/UserResult";
import { useGetUser } from "../../services/useGetUsers";
import { UserDTO } from "../../types/users";

import { usersFinderResolver } from "./resolvers";
import { FormControl } from "./styles";

export const Home = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<UserDTO>({
    resolver: yupResolver(usersFinderResolver),
  });

  const { refetch, isFetching, data, isError } = useGetUser(watch("username"));

  const onSubmit = () => {
    refetch();
  };

  return (
    <>
      <Card>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <UserFinder
            isFetching={isFetching}
            errors={errors}
            control={control}
            hasData={!!data}
          />
        </FormControl>
      </Card>

      <Card>
        <UserResult data={data} isError={isError} />
      </Card>
    </>
  );
};
