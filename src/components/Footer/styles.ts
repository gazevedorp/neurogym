import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Container = styled.footer`
  width: 100%;
  padding: 40px 0 20px;
`;

export const ContainerFooter = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid
    ${(props) =>
      props.color === "purple"
        ? colors.lightPurple
        : props.color === "blue"
        ? colors.blue
        : colors.golden};
  border-bottom: 1px solid
    ${(props) =>
      props.color === "purple"
        ? colors.lightPurple
        : props.color === "blue"
        ? colors.blue
        : colors.golden};
  padding: 20px 0;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    padding: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContainerLogo = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 15px;
`;

export const Slogan = styled.p`
  font-size: 12px;
  color: ${(props) =>
    props.color === "purple"
      ? colors.lightPurple
      : props.color === "blue"
      ? colors.blue
      : colors.golden};
  font-weight: 600;
  width: 200px;
  margin-bottom: 15px;
  text-align: left;
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const SocialIcon = styled.a<{ src: string }>`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: inline-block;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &:last-child {
    margin-right: 0;
  }
`;

export const ContainerList = styled.div`
  flex: 1;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s;

  &:hover {
    color: ${colors.golden};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MenuIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;

export const ContainerNewsletter = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;
  }
`;

export const NewsletterTitle = styled.p`
  color: ${(props) =>
    props.color === "purple"
      ? colors.lightPurple
      : props.color === "blue"
      ? colors.blue
      : colors.golden};
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: left;
`;

export const NewsletterInput = styled.input`
  width: 100%;
  max-width: 280px;
  font-size: 14px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${colors.white};
  border-radius: 5px;
  background-color: transparent;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.white};
  }
`;

export const NewsletterButton = styled.button`
  width: 100%;
  max-width: 280px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  padding: 0 20px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.color === "purple"
      ? colors.lightPurple
      : props.color === "blue"
      ? colors.blue
      : colors.golden};
  color: ${colors.black};
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.color === "purple"
        ? colors.darkPurple
        : props.color === "blue"
        ? colors.darkBlue
        : colors.darkGolden};
    color: ${colors.white};
  }
`;

export const ContainerTerms = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 10px auto 0;
  text-align: center;
`;

export const Terms = styled.a`
  color: ${colors.white};
  font-size: 12px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${colors.golden};
  }
`;