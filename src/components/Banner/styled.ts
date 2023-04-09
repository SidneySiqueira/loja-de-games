import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
`;

export const Announcement = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Price = styled.h2`
  margin-bottom: 15px;
  font-size: 30px;

  @media (max-width: 768px) {
   text-align: center;
  }
`;

export const BoxDescription = styled.p`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const showMore = styled.span`
  width: 100%;
  max-width: 300px;
  text-align: center;
  color: blue;
`;

export const Buy = styled.button`
  margin-top: 15px;
  font-size: 30px;
  padding: 5px;
  :hover{
    cursor: pointer;
  }

  @media (max-width: 768px) {
   width: 100%;
  }
`;


