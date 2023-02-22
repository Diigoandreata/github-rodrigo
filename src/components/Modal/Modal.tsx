import { X } from "phosphor-react";

import { UserModel } from "../../types/users";
import { Card } from "../Card";
import { UserData } from "../UserData";

import { Content, IconWrapper } from "./styles";

type ModalProps = {
  data?: UserModel;
  isOpen: boolean;
  onClose?: () => void;
};

export const Modal = ({ data, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Content onClick={onClose}>
      <Card onClick={(event) => event.stopPropagation()}>
        <IconWrapper>
          <X size={24} cursor="pointer" onClick={onClose} />
        </IconWrapper>
        <UserData data={data} onModal />
      </Card>
    </Content>
  );
};
