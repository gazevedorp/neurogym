import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

interface CardProps {
  image: string;
}

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Card = styled.div<CardProps>`
  width: 216px;
  height: 323px;
  margin-left: 15px;
  margin-right: 15px;
  background-image: url(${props => props.image});
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Button = styled.button`
  background-color: ${colors.golden};
  color: ${colors.white};
  font-weight: 400;
  padding: 10px 15px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  font-size: 14px;
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 10px;
`