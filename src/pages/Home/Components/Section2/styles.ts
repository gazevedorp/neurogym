import styled from "styled-components";
import { colors } from "../../../../assets/colors";

interface CardProps {
  image: string;
}

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap; /* Permite que os cards quebrem linha */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div<CardProps>`
  width: 216px;
  height: 323px;
  margin: 15px;
  background-image: url(${(props) => props.image});
  background-size: cover; /* Ajusta a imagem para cobrir o card */
  background-position: center; /* Centraliza a imagem */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: calc(50% - 30px); /* Dois cards por linha */
    height: 250px;
  }

  @media (max-width: 480px) {
    width: calc(100% - 30px); /* Um card por linha */
    height: 200px;
  }
`;

export const Button = styled.button`
  background-color: ${colors.golden};
  color: ${colors.white};
  font-weight: 400;
  padding: 10px 15px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  font-size: 12px;
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    width: 100%; /* Botão ocupa toda a largura no mobile */
    justify-content: center; /* Centraliza o conteúdo do botão */
  }
`;

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;
