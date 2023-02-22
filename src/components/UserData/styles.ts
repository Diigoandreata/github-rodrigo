import styled from "styled-components";

export const Avatar = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-bottom: 8px;
`;

export const Username = styled.p`
  color: #b5b5c3;
  font-size: 14px;
  margin-bottom: 16px;

  @media (min-width: 992px) {
    font-size: 16px;
  }
`;

export const Name = styled.p`
  color: #181c32;
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 992px) {
    font-size: 18px;
  }
`;

export const DetailsWrapper = styled.div`
  align-self: flex-start;
  width: 100%;

  & + & {
    border-top: 1px dashed #b5b5c3;
    margin-top: 16px;
    padding-top: 16px;
  }
`;

export const DetailTitle = styled.p`
  color: #181c32;
  font-size: 15px;
  font-weight: 600;

  @media (min-width: 992px) {
    font-size: 17px;
  }
`;

export const DetailInfo = styled.p`
  color: #009ef7;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 992px) {
    font-size: 15px;
  }
`;
