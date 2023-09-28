import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

interface SubtitleProps {
  top?: number;
  bottom?: number;
}

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 100px;
`;

export const ContainerLeft = styled.div`
  width: 340px;
`;

export const Image = styled.img`
  width: 100%;
`

export const TitleGolden = styled.p`
  font-size: 18px;
  color: ${colors.golden};
  font-weight: 600;
`

export const Subtitle = styled.p<SubtitleProps>`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.top ? props.top : 0}px;
  margin-bottom: ${props => props.bottom ? props.bottom : 0}px;
`

export const Button = styled.button`
  background-color: ${colors.golden};
  color: ${colors.darkGolden};
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 100px;
  font-size: 10px;
  margin-right: 10px;
  cursor: pointer;
`

export const ContainerRight = styled.div`
  width: 540px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 440px;
`;

export const Icon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`