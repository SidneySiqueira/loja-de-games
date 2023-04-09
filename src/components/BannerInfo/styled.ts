import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  padding: 15px;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
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
  max-width: 200px;
`;

export const Announcement = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Name = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Emphasis = styled.h2`
  color: red;
  margin-bottom: 15px;
  font-size: 25px;
  border: 1px solid black;
  text-align: center;
`;

export const Subtitle = styled.p`
  margin-bottom: 5px;
  font-size: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Buy = styled.p`
  margin-top: 15px;
  padding: 5px;
 
  :hover{
    cursor: pointer;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;


