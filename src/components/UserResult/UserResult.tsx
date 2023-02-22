import { useState } from "react";

import { UserModel } from "../../types/users";

import { Modal } from "../Modal";
import { UserData } from "../UserData";

import { ErrorMessage, Subtitle } from "./styles";

type UserListProps = {
  data?: UserModel;
  isError?: boolean;
};

export const UserResult = ({ data, isError }: UserListProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  if (isError)
    return (
      <ErrorMessage>
        Usuário não encontrado, por favor, tente novamente.
      </ErrorMessage>
    );

  if (!data)
    return (
      <Subtitle>Os dados do usuários buscado serão exibidos aqui.</Subtitle>
    );

  return (
    <>
      <UserData data={data} openModal={() => setModalOpen(true)} />
      <Modal
        data={data}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
