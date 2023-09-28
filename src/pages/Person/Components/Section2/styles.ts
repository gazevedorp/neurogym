import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

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

export const TitlePurple = styled.p`
  font-size: 18px;
  color: ${colors.lightPurple};
  font-weight: 600;
`

export const Title = styled.p`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 600;
  text-transform: uppercase;
`

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 400;
`

export const Button = styled.button`
  background-color: ${colors.lightPurple};
  color: ${colors.purple};
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
  justify-content: space-between;
  align-items: flex-start;
  height: 320px;
`;