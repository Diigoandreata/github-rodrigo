import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  padding: 9px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #5e6278;
  border: 1px solid #e1e3ea;
  appearance: none;
  border-radius: 4px;
  height: 40px;
  transition: border-color 0.15s ease-in-out;

  &:focus {
    outline: 0;
    border-color: #b5b5c3;
  }
`;

export const Error = styled.small`
  color: #b02a37;
  font-size: 12px;

  @media (min-width: 992px) {
    font-size: 14px;
  }
`;
