import logoGolden from "../../assets/images/logoGolden.png"
import logoBlue from "../../assets/images/logoBlue.png"
import logoPurple from "../../assets/images/logoPurple.png"
import { Button, Container, ContainerHeader, Link, Logo, Menu, DivButton, ButtonIcon } from './styles'
import loginIcon from '../../assets/icons/user.png'

interface HeaderProps {
    color?: 'blue' | 'purple',
}

const Header = ({ color }: HeaderProps) => {

    return (
        <Container>
            <ContainerHeader>
                <a href="/">
                    <Logo src={color === "purple" ? logoPurple : color === "blue" ? logoBlue : logoGolden} />
                </a>
                <Menu>
                    <Link href="#">PARA VOCÊ</Link>
                    <Link href="#">PARA EMPRESAS</Link>
                    <Link href="#">PARA ESCOLAS</Link>
                    <Link href="#">SOBRE</Link>
                    <Link href="#">BLOG</Link>
                    <Link href="#">FAQ</Link>
                    <Link href="#">CONTATO</Link>
                </Menu>
                <DivButton>
                    <Button><ButtonIcon src={loginIcon} />LOGIN</Button>
                </DivButton>
            </ContainerHeader>
        </Container>
    )
}

export default Header;