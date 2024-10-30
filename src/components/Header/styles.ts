import styled from "styled-components";
import { colors } from "../../assets/colors";

interface MenuProps {
  isOpen: boolean;
}

export const Container = styled.header`
  width: 100%;
  padding: 20px 0;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 180px;

   @media (max-width: 768px) {
    margin-left: 50px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Menu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: ${colors.lightPurple};
    align-items: center;
    padding: 20px 0;
    z-index: 999;
  }
`;

export const Link = styled.a`
  color: ${colors.white};
  font-size: 14px;
  margin: 0 12px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${colors.golden};
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button<{ color?: string }>`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.color === "purple"
      ? colors.lightPurple
      : props.color === "blue"
      ? colors.blue
      : colors.golden};
  color: ${colors.black};
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 12px;
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

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;
