import styled from "styled-components";

export const Wrapper = styled.div`
  max-width:150px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 30px;
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

export const Name = styled.h3`
  text-align: center;
`;

export const Price = styled.p`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;