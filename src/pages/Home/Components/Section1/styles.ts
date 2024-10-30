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

export const ContainerLeft = styled.div`
  width: 430px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 240px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    align-items: center;
    height: auto;
  }
`;

export const Logo = styled.img`
  width: 240px;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: ${colors.white};
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    margin: 10px 0;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 400;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;

export const Button1 = styled.button`
  background-color: ${colors.purple};
  color: ${colors.darkPurple};
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 100px;
  font-size: 10px;
  margin-right: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Button2 = styled(Button1)`
  background-color: ${colors.blue};
  color: ${colors.darkBlue};
`;

export const Button3 = styled(Button1)`
  background-color: ${colors.golden};
  color: ${colors.darkGolden};
  margin-right: 0; /* Remover margem direita para alinhar com os outros botões */
`;

export const ContainerRight = styled.div`
  width: 600px;
  margin-left: -100px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;