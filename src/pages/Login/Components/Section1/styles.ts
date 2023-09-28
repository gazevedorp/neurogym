import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
`;

export const Form = styled.div`
  width: 400px;
`;

export const InputTitle = styled.p`
  font-size: 12px;
  color: ${colors.golden};
  margin-bottom: 0px;
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
  width: 70px;
  height: 30px;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 100px;
  background-color: ${colors.golden};
  color: ${colors.black};
  cursor: pointer;
  `