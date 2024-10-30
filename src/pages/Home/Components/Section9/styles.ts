import styled from "styled-components";
import { colors } from "../../../../assets/colors";

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: ${colors.golden};
  text-align: center;
`;

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 276px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const CardBlue = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 192px;
  background-color: ${colors.purpleBlue};
`;

export const CardCategory = styled.p`
  margin-top: 15px;
  font-size: 10px;
  color: ${colors.golden};
`;

export const CardTitle = styled.p`
  font-size: 10px;
  color: ${colors.white};
  font-weight: bold;
`;

export const CardSubtitle = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: ${colors.white};
`;

export const Button = styled.button`
  margin-top: 15px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${colors.golden};
  color: ${colors.golden};
  font-weight: 400;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 5px;
`;