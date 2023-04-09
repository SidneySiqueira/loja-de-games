import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  text-decoration: underline;
`;

export const AddButton = styled.button`
  font-size: 25px;
  margin: 20px;
  padding: 10px;
  background: transparent;
  cursor:pointer;

  :hover {
    background: gray;
  }
`;
