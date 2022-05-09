import { lighten } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { MdHome, MdPeople } from "react-icons/md";
import styled, { ThemeContext } from "styled-components";
import { PageIndices } from "../lib/constants/pageIndices";

const Container = styled.div`
    padding: 1rem 0;
    min-width: 240px;

    h3 {
        font-size: 1rem;
        font-weight: normal;
        color: ${props => props.theme.colors.bold}
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: left;
    }

    nav>ul {
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: ${props => props.theme.colors.text}
    }

    h3,
    nav>ul {
        padding-right: 1rem;
        padding-left: 1rem;
    }

    nav>ul[data-active='true'] {
        background-color: ${props => lighten(props.theme.colors.primary, 0.8)};
    }

    nav>ul:hover {
        background-color: ${props => lighten(props.theme.colors.primary, 0.8)};
        cursor: pointer;
    }
`

const HomeIcon = styled(MdHome)`
    margin-right: 1rem;
`

const CustomersIcon = styled(MdPeople)`
    margin-right: 1rem;
`

const SideNavigation: React.FC<{
    activePage?: number,
}> = ({
    activePage = PageIndices.Home,
}) => {
    const themeContext = useContext(ThemeContext)

    return (
        <Container>
            <h3>
                Menu
            </h3>
            <nav>
                <Link href='/start'>
                    <ul data-active={ activePage === PageIndices.Home }>
                        <HomeIcon size={ 21 } color={ themeContext.colors.bold } />
                        Início
                    </ul>
                </Link>
                <Link href='/customers'>
                    <ul data-active={ activePage === PageIndices.Customers }>
                        <CustomersIcon size={ 21 } color={ themeContext.colors.bold } />
                        Clientes
                    </ul>
                </Link>
            </nav>
        </Container>
    )
}

export { SideNavigation }