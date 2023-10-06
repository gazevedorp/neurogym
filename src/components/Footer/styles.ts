import styled from 'styled-components'
import { colors } from '../../assets/colors'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerFooter = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${props => props.color == "purple" ? colors.lightPurple : props.color == "blue" ? colors.blue : colors.golden};
  border-bottom: 1px solid ${props => props.color == "purple" ? colors.lightPurple : props.color == "blue" ? colors.blue : colors.golden};
  padding: 20px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Logo = styled.img`
  width: 180px;
`

export const Slogan = styled.p`
  font-size: 10px;
  color: ${props => props.color == "purple" ? colors.lightPurple : props.color == "blue" ? colors.blue : colors.golden};
  font-weight: 600;
  width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ContainerIcons = styled.p`
  display: flex;
  flex-direction: row;
`

export const SocialIcon = styled.img`
  height: 12px;
  margin-right: 10px;
`

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100px;
`;

export const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.white};
  display: flex;
  align-items: end;
  text-decoration: none;
`;

export const MenuIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`

export const ContainerNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const NewsletterTitle = styled.p`
  color: ${props => props.color == "purple" ? colors.lightPurple : props.color == "blue" ? colors.blue : colors.golden};
  font-size: 14px;
  margin-bottom: 15px;
`

export const NewsletterInput = styled.input`
  width: 264px;
  font-size: 10px;
  padding: 8px;
  margin-bottom: 15px;
`

export const NewsletterButton = styled.button`
  width: 280px;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 100px;
  background-color: ${props => props.color == "purple" ? colors.lightPurple : props.color == "blue" ? colors.blue : colors.golden};
  color: ${colors.black};
  cursor: pointer;
`

export const ContainerTerms = styled.p`
  width: 85%;
  margin-top: 10px;
`

export const Terms = styled.a`
  color: ${colors.white};
  font-size: 14px;
  text-decoration: none;
`