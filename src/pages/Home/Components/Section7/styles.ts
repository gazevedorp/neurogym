import styled from "styled-components";
import { colors } from "../../../../assets/colors";

export const Title = styled.p`
  font-size: 16px;
  color: ${colors.golden};
  text-align: center;
`;

export const Subtitle = styled.a`
  font-size: 12px;
  color: ${colors.white};
  margin-top: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardTitle = styled.p`
  margin-top: 15px;
  font-size: 12px;
  color: ${colors.golden};
`;

export const CardSubtitle = styled.p`
  font-size: 12px;
  color: ${colors.golden};
`;

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 5px;
`;