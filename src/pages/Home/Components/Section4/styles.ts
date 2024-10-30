import styled from "styled-components";
import { colors } from "../../../../assets/colors";

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerRight = styled.div`
  width: 340px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const TitleBlue = styled.p`
  font-size: 18px;
  color: ${colors.blue};
  font-weight: 600;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 400;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.darkBlue};
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 100px;
  font-size: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ContainerLeft = styled.div`
  width: 540px;
  margin-top: 80px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 280px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    align-items: center;
    height: auto;
  }
`;