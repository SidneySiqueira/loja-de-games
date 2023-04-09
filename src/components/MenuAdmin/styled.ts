import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 300px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  @media (max-width: 768px) {
    justify-content: center;
    border-bottom: none;
    border-right: none;
    padding: 0px;
    min-height: 100%;
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  padding: 10px;
`;

export const Topics = styled.p`
  font-size: 20px;
  padding: 5px;

  cursor: pointer;

  @media (max-width: 768px) {
   text-align: center;
  }
`;
