import logoGolden from "../../assets/images/logoGolden.png"
import logoBlue from "../../assets/images/logoBlue.png"
import logoPurple from "../../assets/images/logoPurple.png"
import { Container, ContainerFooter, ContainerLogo, Logo, ContainerList, ContainerNewsletter, Link, MenuIcon, NewsletterTitle, NewsletterInput, NewsletterButton, Slogan, ContainerIcons, SocialIcon } from './styles'
import menuIcon from '../../assets/icons/round.png'
import facebookIcon from '../../assets/icons/facebook.png'
import twitterIcon from '../../assets/icons/twitter.png'
import instagramIcon from '../../assets/icons/instagram.png'

interface HeaderProps {
    color?: 'blue' | 'purple',
}

const Footer = ({ color }: HeaderProps) => {
    return (
        <Container>
            <ContainerFooter>
                <ContainerLogo>
                    <a href="/">
                        <Logo src={color === "purple" ? logoPurple : color === "blue" ? logoBlue : logoGolden} />
                    </a>
                    <Slogan>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Slogan>
                    <ContainerIcons>
                        <SocialIcon src={facebookIcon} />
                        <SocialIcon src={twitterIcon} />
                        <SocialIcon src={instagramIcon} />
                    </ContainerIcons>
                </ContainerLogo>
                <ContainerList>
                    <Link href="#"><MenuIcon src={menuIcon} />PARA VOCÊ</Link>
                    <Link href="#"><MenuIcon src={menuIcon} />PARA EMPRESAS</Link>
                    <Link href="#"><MenuIcon src={menuIcon} />PARA ESCOLAS</Link>
                    <Link href="#"><MenuIcon src={menuIcon} />CERTIFICADO</Link>
                </ContainerList>
                <ContainerList>
                    <Link href="#"><MenuIcon src={menuIcon} />SOBRE</Link>
                    <Link href="#"><MenuIcon src={menuIcon} />BLOG</Link>
                    <Link href="#"><MenuIcon src={menuIcon} />FAQ</Link>
                    <Link href="#"><MenuIcon src={menuIcon} />CONTATO</Link>
                </ContainerList>
                <ContainerNewsletter>
                    <NewsletterTitle>Novidades e Promoções</NewsletterTitle>
                    <NewsletterInput placeholder="Seu E-mail" />
                    <NewsletterButton>INSCREVER-SE</NewsletterButton>
                </ContainerNewsletter>
            </ContainerFooter>
        </Container>
    )
}

export default Footer;