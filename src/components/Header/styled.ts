import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const BoxWelcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const TextLogin = styled.p`
  font-weight: bold;
  margin: 5px 10px;
`;

export const ButtonLogin = styled.button`
  margin: 5px 10px;
  padding: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 95%;
    margin: 5px 10px 10px;
  }
`;