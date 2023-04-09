import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  width: 90%;
  margin: 20px auto;
  border: 1px solid black;
`;

export const Component = styled(Grid)`
  border: 1px solid black;
`;

export const ComponentMenu = styled(Grid)`
  border-left: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-left: 0px;
  padding-top: 0px;
`;

export const ComponentMain = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    border-left: 1px solid black;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: auto;
`;
