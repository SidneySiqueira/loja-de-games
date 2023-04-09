import { Grid } from "@mui/material";
import styled from "styled-components";

interface props {
  disabled?: boolean;
}

export const Wrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BoxItem = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
  flex-direction: column;
  }

  @media (max-width: 1100px) {
    word-wrap: wrap;
  }
`;

export const Item = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  min-height: 40px;
  padding: 0px 15px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Container = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  padding: 20px 15px;
  border: 1px solid black;
`;

export const ContainerItems = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
  flex-direction: column;
  }
`;

export const BoxEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 40px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
  flex-direction: row;
  }
`;

export const BoxPrice = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    word-wrap: wrap;
  }
`;

export const BoxButtons = styled.div`
  width: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
  flex-direction: row;
  }
`;

export const Edit = styled.button<props>`
  height: 30px;
  margin: 0px 10px;
  padding: 0px 5px;
  font-weight: bold;
  background: transparent;
  cursor: pointer;

  :hover {
    background: gray;
  }

  @media (max-width: 1100px) {
    margin: 5px 10px;
  }
`;

export const Remove = styled.button`
  height: 30px;
  margin: 0px 10px;
  padding: 0px 5px;
  font-weight: bold;
  background: red;
  cursor: pointer;

  :hover {
    color: white;
    background: #730202;
  }
`;
