import styled from 'styled-components';
import { colors } from '../../../../assets/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputTitle = styled.p`
  font-size: 12px;
  color: ${colors.golden};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${colors.golden};
`;

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LinkStyled = styled.a`
  font-size: 12px;
  color: ${colors.golden};
  margin-bottom: 0px;
  text-decoration: none;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 100px;
  background-color: ${colors.golden};
  color: ${colors.black};
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${colors.darkGolden};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;