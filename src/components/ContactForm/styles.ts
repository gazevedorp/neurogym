import styled from 'styled-components'
import { colors } from '../../assets/colors'

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
`;

export const Title = styled.p`
  font-size: 16px;
  color: ${colors.golden};
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${colors.white};
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Row = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputDiv = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  color: ${colors.golden};
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 4px;
`;

export const InputSelect = styled.select`
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 4px;
  color: ${colors.golden};
`;

export const TextArea = styled.textarea`
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 100px;
  background-color: ${colors.golden};
  color: ${colors.black};
  cursor: pointer;
`