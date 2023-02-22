import { UserModel } from "../../types/users";
import {
  Avatar,
  DetailInfo,
  DetailsWrapper,
  DetailTitle,
  Name,
  Username,
} from "./styles";

type userProps = {
  data?: UserModel;
  onModal?: boolean;
  openModal?: () => void;
};

export const UserData = ({ data, onModal, openModal }: userProps) => (
  <>
    <Avatar src={data?.avatar_url} alt="avatar" />
    <Name>{data?.name}</Name>
    <Username>{data?.login}</Username>

    {!onModal ? (
      <DetailsWrapper>
        <DetailTitle>Detalhes</DetailTitle>
        <DetailInfo onClick={openModal}>Ver mais detalhes</DetailInfo>
      </DetailsWrapper>
    ) : (
      <>
        <DetailsWrapper>
          <DetailTitle>E-mail</DetailTitle>
          <DetailInfo>{data?.email || "Nenhum e-mail cadastrado"}</DetailInfo>
        </DetailsWrapper>
        <DetailsWrapper>
          <DetailTitle>Localização</DetailTitle>
          <DetailInfo>
            {data?.location || "Nenhuma localização cadastrada"}
          </DetailInfo>
        </DetailsWrapper>
        <DetailsWrapper>
          <DetailTitle>Repositórios</DetailTitle>
          <DetailInfo>{data?.public_repos}</DetailInfo>
        </DetailsWrapper>
      </>
    )}
    <DetailsWrapper>
      <DetailTitle>Perfil no Github</DetailTitle>
      <DetailInfo as="a" href={data?.html_url} target="_blank">
        {data?.html_url}
      </DetailInfo>
    </DetailsWrapper>
  </>
);
