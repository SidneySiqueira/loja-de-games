import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
  padding: 30px;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 0px;
  }
`;

export const BoxAddButton = styled(Grid)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
