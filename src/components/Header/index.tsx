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
                    <Link href="/voce">PARA VOCÊ</Link>
                    <Link href="/empresas">PARA EMPRESAS</Link>
                    <Link href="/escolas">PARA ESCOLAS</Link>
                    <Link href="/sobre">SOBRE</Link>
                    <Link href="/blog">BLOG</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/contato">CONTATO</Link>
                </Menu>
                <DivButton>
                    <Button
                        color={color}
                        onClick={() => window.location.href = ("/login")}
                    >
                        <ButtonIcon src={loginIcon} />
                        LOGIN
                    </Button>
                </DivButton>
            </ContainerHeader>
        </Container>
    )
}

export default Header;