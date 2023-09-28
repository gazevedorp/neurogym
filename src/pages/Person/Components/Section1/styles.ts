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
  width: 460px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 240px;
`;

export const Logo = styled.img`
  width: 240px;
`

export const Title = styled.p`
  width: 320px;
  font-size: 16px;
  color: ${colors.white};
  font-weight: 600;
  text-transform: uppercase;
`

export const Subtitle = styled.p`
  width: 320px;
  font-size: 14px;
  color: ${colors.white};
  font-weight: 400;
`

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  background-color: ${colors.lightPurple};
  color: ${colors.darkPurple};
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 100px;
  font-size: 10px;
  margin-right: 10px;
  cursor: pointer;
`

export const ContainerRight = styled.div`
  width: 500px;
`;

export const Image = styled.img`
  width: 100%;
`