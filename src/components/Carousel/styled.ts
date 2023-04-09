import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: 2px solid black;
`;

export const ListProduct = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-Height: 150px;
`;

export const ImageProduct = styled.img`
  width: 100%;
  max-width: 150px;
`;

export const ArrowButton = styled.button`
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;