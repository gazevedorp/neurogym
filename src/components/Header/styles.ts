import styled from 'styled-components'
import { colors } from '../../assets/colors'

interface ButtonProps {
  color?: string;
}

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerHeader = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 180px;
`

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.color == "purple" ? colors.lightPurple : props.color == "blue" ? colors.blue : colors.golden};
  color: ${colors.black};
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 12px;
  cursor: pointer;
`

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 3px;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
`

export const Link = styled.a`
  color: ${colors.white};
  font-size: 12px;
  margin-right: 24px;
  text-decoration: none;
`