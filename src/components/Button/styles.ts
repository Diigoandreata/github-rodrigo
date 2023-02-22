import styled from "styled-components";

export const Content = styled.button`
  width: 100%;
  margin-top: 10px;
  height: 40px;
  background: transparent;
  border: none;
  background: #181c32;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: #000;
  }

  &:disabled,
  &[disabled] {
    background: #ccc;
  }
`;
