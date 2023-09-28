import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 100px;
`;

export const ContainerRight = styled.div`
  width: 340px;
`;

export const Image = styled.img`
  width: 100%;
`

export const TitleGolden = styled.p`
  width: 450px;
  font-size: 18px;
  color: ${colors.golden};
  font-weight: 600;
`

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 400;
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

export const ContainerLeft = styled.div`
  width: 540px;
  margin-top: 80px;
  margin-right: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 260px;
`;