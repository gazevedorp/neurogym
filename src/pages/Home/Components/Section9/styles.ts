import styled from 'styled-components'
import { colors } from '../../../../assets/colors'

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: ${colors.golden};
`;

export const Subtitle = styled.p`
  font-size: 14px;
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
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CardBlue = styled.div`
  border-radius: 10px;
  width: 276px;
  height: 192px;
  background-color: ${colors.purpleBlue};
`;

export const CardCategory = styled.p`
  margin-top: 15px;
  font-size: 10px;
  color: ${colors.golden};
`;

export const CardTitle = styled.p`
  font-size: 10px;
  color: ${colors.white};
  font-weight: bold;
`;

export const CardSubtitle = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: ${colors.white};
`;

export const Button = styled.button`
  margin-top: 15px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${colors.golden};
  color: ${colors.golden};
  font-weight: 400;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 10px;
  cursor: pointer;
`

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 5px;
`