import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: #181c32;
  font-size: 20px;
  margin-bottom: 16px;

  @media (min-width: 992px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  color: #181c32;
  font-size: 16px;
  text-align: center;

  @media (min-width: 992px) {
    font-size: 18px;
  }
`;
