import styled from "styled-components";
import { colors } from "../../../../assets/colors";

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  border: 2px solid ${colors.golden};
  border-radius: 25px;
  width: 180px;
  margin: 10px 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const CardTitle = styled.p`
  padding: 20px 28px;
  font-size: 12px;
  color: ${colors.white};
  text-align: center;
`;