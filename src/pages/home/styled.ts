import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  width: 90%;
  margin: 20px auto;
  border: 3px solid black;
`;

export const Component = styled(Grid)`
  border: 3px solid black;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  margin-left: 10px;
  padding: 10px;
  text-decoration: underline;
  cursor:pointer;

  @media (max-width: 980px) {
    text-align: center;
  }
`;