import { Container, ContainerTitle, Title } from './styles'

interface InternalHeaderProps {
    title: string,
}

const InternalHeader = ({ title }: InternalHeaderProps) => {

    return (
        <Container>
            <ContainerTitle>
                <Title>{title}</Title>
            </ContainerTitle>
        </Container>
    )
}

export default InternalHeader;