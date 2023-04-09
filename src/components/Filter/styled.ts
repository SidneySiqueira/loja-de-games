import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.h2`
  padding: 10px;

  @media (max-width: 980px) {
    text-align: center;
  }
`;

export const Topics = styled.p`
  font-size: 20px;
  padding: 5px;

  cursor: pointer;

  @media (max-width: 980px) {
    text-align: center;
  }
`;
