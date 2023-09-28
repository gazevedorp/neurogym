import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const Form = styled.div`
  width: 600px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  justify-content: center;
  align-items: flex-start;
`;

export const InputTitle = styled.p`
  font-size: 12px;
  color: ${colors.golden};
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  font-size: 12px;
  color: ${colors.golden};
  margin-bottom: 0px;
  text-decoration: none;
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 100px;
  background-color: ${colors.golden};
  color: ${colors.black};
  cursor: pointer;
  `