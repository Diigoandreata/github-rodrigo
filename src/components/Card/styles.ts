import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  margin: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0.1rem 1rem 0.25rem rgb(0 0 0 / 5%);

  @media (min-width: 768px) {
    max-width: 700px;
    margin: 40px auto;
  }
`;
