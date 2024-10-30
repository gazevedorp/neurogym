import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: ${(props) =>
    props.color === "purple"
      ? colors.lightPurple
      : props.color === "blue"
      ? colors.blue
      : colors.golden};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${colors.white};
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Row = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const InputDiv = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const InputDivTextArea = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InputTitle = styled.p`
  font-size: 10px;
  color: ${(props) =>
    props.color === "purple"
      ? colors.lightPurple
      : props.color === "blue"
      ? colors.blue
      : colors.golden};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InputSelect = styled.select`
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 4px;
  color: ${colors.golden};
  border: none;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  resize: vertical;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 100px;
  background-color: ${(props) =>
    props.color === "purple"
      ? colors.lightPurple
      : props.color === "blue"
      ? colors.blue
      : colors.golden};
  color: ${colors.black};
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.color === "purple"
        ? colors.darkPurple
        : props.color === "blue"
        ? colors.darkBlue
        : colors.darkGolden};
    color: ${colors.white};
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 16px;
  }
`;