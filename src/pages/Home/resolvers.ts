import * as yup from "yup";

export const usersFinderResolver = yup
  .object({
    username: yup.string().required("Campo obrigatório."),
  })
  .required();
