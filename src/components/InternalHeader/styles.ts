import styled from 'styled-components'
import { colors } from '../../assets/colors'

export const Container = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.golden};
`;

export const ContainerTitle = styled.div`
  width: 85%;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;