import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
  margin-bottom: 50px;
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

export const Subtitle = styled.p`
  font-size: 12px;
  margin-top: 15px;
  color: ${colors.white};
  font-weight: 400;
`

export const ContainerRight = styled.div`
  width: 600px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 320px;
`;