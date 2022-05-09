import styled from "styled-components"

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
`

const RouteLoader: React.FC = () => {
    return (
        <Container>

        </Container>
    )
}

export { RouteLoader }