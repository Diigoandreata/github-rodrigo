import { useQuery } from "@tanstack/react-query";
import { UserModel } from "../types/users";
import { api } from "./api";

export const useGetUser = (username: string) => {
  return useQuery<UserModel>(
    ["user", username],
    async () => {
      const { data } = await api.get(`users/${username}`);

      return data;
    },
    {
      enabled: false,
      staleTime: 5 * (60 * 1000), // 5 mins
    }
  );
};
