import logoGolden from "../../assets/images/logoGolden.png"
import logoBlue from "../../assets/images/logoBlue.png"
import logoPurple from "../../assets/images/logoPurple.png"
import { Container, ContainerFooter, ContainerLogo, Logo, ContainerList, ContainerNewsletter, Link, MenuIcon, NewsletterTitle, NewsletterInput, NewsletterButton, Slogan, ContainerIcons, SocialIcon, ContainerTerms, Terms } from './styles'
import menuIconGolden from '../../assets/icons/round.png'
import menuIconBlue from '../../assets/icons/roundBlue.png'
import menuIconPurple from '../../assets/icons/roundPurple.png'
import facebookIcon from '../../assets/icons/facebook.png'
import twitterIcon from '../../assets/icons/twitter.png'
import instagramIcon from '../../assets/icons/instagram.png'

interface HeaderProps {
    color?: 'blue' | 'purple',
}

const Footer = ({ color }: HeaderProps) => {

    const menuIcon = color === "purple" ? menuIconPurple : color === "blue" ? menuIconBlue : menuIconGolden;

    return (
        <Container>
            <ContainerFooter color={color}>
                <ContainerLogo>
                    <a href="/">
                        <Logo src={color === "purple" ? logoPurple : color === "blue" ? logoBlue : logoGolden} />
                    </a>
                    <Slogan color={color}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Slogan>
                    <ContainerIcons>
                        <SocialIcon src={facebookIcon} />
                        <SocialIcon src={twitterIcon} />
                        <SocialIcon src={instagramIcon} />
                    </ContainerIcons>
                </ContainerLogo>
                <ContainerList>
                    <Link href="/voce"><MenuIcon src={menuIcon} />PARA VOCÊ</Link>
                    <Link href="/empresas"><MenuIcon src={menuIcon} />PARA EMPRESAS</Link>
                    <Link href="/escolas"><MenuIcon src={menuIcon} />PARA ESCOLAS</Link>
                    <Link href="/certificado"><MenuIcon src={menuIcon} />CERTIFICADO</Link>
                </ContainerList>
                <ContainerList>
                    <Link href="/sobre"><MenuIcon src={menuIcon} />SOBRE</Link>
                    <Link href="/blog"><MenuIcon src={menuIcon} />BLOG</Link>
                    <Link href="/faq"><MenuIcon src={menuIcon} />FAQ</Link>
                    <Link href="/contato"><MenuIcon src={menuIcon} />CONTATO</Link>
                </ContainerList>
                <ContainerNewsletter>
                    <NewsletterTitle color={color}>Novidades e Promoções</NewsletterTitle>
                    <NewsletterInput placeholder="Seu E-mail" />
                    <NewsletterButton color={color}>INSCREVER-SE</NewsletterButton>
                </ContainerNewsletter>
            </ContainerFooter>
            <ContainerTerms>
                <Terms href="#">Termos e Condições | Política de Privacidade</Terms>
            </ContainerTerms>
        </Container>
    )
}

export default Footer;