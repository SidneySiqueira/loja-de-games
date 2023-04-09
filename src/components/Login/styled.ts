import styled from "styled-components";

export const FormLogin = styled.form`
  margin: 0px 15px;
  display: flex;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LabelLogin = styled.label`
  font-weight: bold;
  margin: 5px 10px;
`;

export const InputLogin = styled.input`
  margin: 5px 10px;
  padding: 5px;
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