import Link from "next/link"
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

    div.logo {
        display: none;
    }

    ${media.desktop} {
        z-index: 1500;

        .menu {
            display: none;
        }

        div.logo {
            display: inline-block;
        }
    }
`

const Logo = styled.img`
    &:hover {
        cursor: pointer;
    }

    height: 3.5rem;
`

const Header: React.FC<{
    onMenuClick?: () => void,
}> = ({
    onMenuClick,
}) => {
    const themeContext = useContext(ThemeContext)

    return (
        <Container>
            <Link href='/start'>
                <div className='logo'>
                    <Logo src='logo.svg' alt='Embla logo' aria-label='Embla logo' />
                </div>
            </Link>
            <div className='menu' onClick={ onMenuClick }>
                <MdMenu color={ themeContext.colors.light } size={ 24 } />
            </div>
            {/* <div>
                <MdSearch color={ themeContext.colors.light } size={ 24 } />
            </div> */}
        </Container>
    )
}

export { Header }