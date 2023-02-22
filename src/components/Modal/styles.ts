import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    height: 430px;
    width: 100%;

    @media (min-width: 768px) {
      max-width: 700px;
    }

    @media (min-width: 992px) {
      height: 450px;
    }
  }
`;

export const IconWrapper = styled.div`
  align-self: flex-end;
`;
