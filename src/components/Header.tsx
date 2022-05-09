import { useContext } from "react"
import { MdMenu, MdSearch } from "react-icons/md"
import styled, { ThemeContext } from "styled-components"
import { media } from "../styles/responsive"

const Container = styled.div`
    height: 4rem;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 1px solid ${props => props.theme.colors.shadow};
    display: flex;
    justify-content: space-between;

    div {
        padding: 0 1rem;
        display: flex;
        align-items: center;
        height: 100%;
    }

    ${media.desktop} {
        z-index: 1500;
    }
`

const Header: React.FC<{
    onMenuClick?: () => void,
}> = ({
    onMenuClick,
}) => {
    const themeContext = useContext(ThemeContext)

    return (
        <Container>
            <div onClick={ onMenuClick }>
                <MdMenu color={ themeContext.colors.light } size={ 24 } />
            </div>
            <div>
                <MdSearch color={ themeContext.colors.light } size={ 24 } />
            </div>
        </Container>
    )
}

export { Header }