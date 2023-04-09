import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  padding: 15px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
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
  width: 55%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const Announcement = styled.div`
  width: 45%;
  height: 100%;
  padding: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Price = styled.h2`
  margin-bottom: 5px;
  font-size: 20px;

  @media (max-width: 768px) {
   text-align: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;

  @media (max-width: 768px) {
   text-align: center;
  }
`;

export const SubTitle = styled.p`
  font-size: 15px;

  @media (max-width: 768px) {
   text-align: center;
  }
`;

export const Buy = styled.button`
  width: 100%;
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


