import styled from 'styled-components'
import { colors } from '../../assets/colors';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivQuestion = styled.div`
  border: 1px solid ${colors.golden};
  border-radius: 10px;
  padding: 15px;
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const TitleGolden = styled.p`
  font-size: 18px;
  color: ${colors.golden};
  font-weight: 600;
`

export const Subtitle = styled.p`
  font-size: 12px;
  margin-top: 10px;
  color: ${colors.white};
  font-weight: 400;
`