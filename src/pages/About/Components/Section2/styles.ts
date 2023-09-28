import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const TitleGolden = styled.p`
  width: 600px;
  text-align: center;
  font-size: 18px;
  color: ${colors.golden};
  font-weight: 600;
`

export const Subtitle = styled.p`
  width: 750px;
  text-align: center;
  font-size: 12px;
  margin-top: 15px;
  color: ${colors.white};
  font-weight: 400;
`