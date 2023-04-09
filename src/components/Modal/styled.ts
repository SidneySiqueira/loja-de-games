import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  max-height: 650px;
  padding: 10px;
  background: white;
  position: fixed;
  border: 2px solid black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Close = styled.span`
  font-family: sans-serif;
  font-weight: bold;
  width: 100%;
  margin: 10px;
  text-align: end;

  cursor: pointer;
`;

export const Title = styled.h2`
  font-family: sans-serif;
  font-weight: bold;
  width: 100%;
  margin: 10px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  margin: 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;

export const FormGroupCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 10px;
`;

export const Atribute = styled.label`
  font-family: sans-serif;
  font-weight: bold;
  margin: 10px 15px 10px 0px;
`;

export const AtributeCheck = styled.label`
  font-family: sans-serif;
  font-weight: bold;
  margin: 10px 15px 10px 0px;
`;

export const Input = styled.input`
  width: 95%;
  padding: 5px;
  min-height: 30px;
  max-height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  overflow-y: auto;
  word-wrap: break-word;
  resize: none;
`;

export const BoxText = styled.textarea`
  width: 95%;
  padding: 5px;
  min-height: 30px;
  max-height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  overflow-y: auto;
  resize: none;
`;

export const Dropdown = styled.select`
  width: 95%;
  padding: 5px;
  min-height: 30px;
  max-height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  overflow-y: auto;
  word-wrap: break-word;
  resize: none;
`;

export const InputCheck = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Add = styled.button`
  width: 95%;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Cancel = styled.button`
  width: 95%;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
`;
