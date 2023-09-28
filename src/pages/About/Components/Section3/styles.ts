import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

export const Title = styled.p`
  font-size: 16px;
  color: ${colors.golden};
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: ${colors.white};
  margin-top: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: end;
`;

export const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const Card = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 300px;
`;

export const CardTitle = styled.p`
  margin-top: 15px;
  font-size: 12px;
  color: ${colors.golden};
`;

export const CardSubtitle = styled.p`
  font-size: 12px;
  color: ${colors.golden};
`;

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 5px;
`