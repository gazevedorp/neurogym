import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

interface SubtitleProps {
  top?: number;
  bottom?: number;
}

export const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const TitleGolden = styled.p`
  font-size: 18px;
  color: ${colors.golden};
  font-weight: 600;
`

export const Subtitle = styled.p<SubtitleProps>`
  width: 600px;
  font-size: 14px;
  text-align: center;
  color: ${colors.white};
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.top ? props.top : 0}px;
  margin-bottom: ${props => props.bottom ? props.bottom : 0}px;
`

export const SubtitleCard = styled.p<SubtitleProps>`
  width: 420px;
  font-size: 14px;
  text-align: left;
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

export const Icon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`

export const ContainerButton = styled.div`

`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`

export const Title = styled.div`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
`