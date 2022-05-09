import { SwipeableDrawer } from "@mui/material"
import React, { useState } from "react"
import styled from "styled-components"
import { PageIndices } from "../lib/constants/pageIndices"
import useLogin, { UseLoginProperties } from "../lib/hooks/useLogin"
import useProtectedRoute from "../lib/hooks/useProtectedRoute"
import { Header } from "./Header"
import { RouteLoader } from "./RouteLoader"
import { SideNavigation } from "./SideNavigation"
import useGetDimensions, { WindowDimensions } from '../lib/hooks/useGetDimensions'

const Container = styled.div`
    flex: 1;
    height: 100%;
`

const Page = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const MainSection = styled.div`
    background-color: ${props => props.theme.colors.background};
    padding: 1.5rem 2rem;
    flex: 1;
    display: flex;
    flex-direction: row;

    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${props => props.theme.colors.bold};
        margin-bottom: 2rem;
    }
`

const ChildrenContainer = styled.div`
    flex: 1;
    height: 100%;
`

const ResponsiveDrawer = styled(SwipeableDrawer)`
    z-index: 1;
`

const PageContainer: React.FC<{
    children: React.ReactNode,
    activePage: number,
}> = ({
    children,
    activePage = PageIndices.Home,
}) => {
    useProtectedRoute()

    const [ accessToken, ]: UseLoginProperties = useLogin()

    const windowDimensions: WindowDimensions = useGetDimensions()

    const [ isDrawerOpen, setIsDrawerOpen ] = useState<boolean>(false)

    const openDrawer = () => {
        setIsDrawerOpen(true)
    }

    const onDrawerClose = () => {
        setIsDrawerOpen(false)
    }

    const onDrawerOpen = () => {
        setIsDrawerOpen(true)
    }

    return (
        <Container>
            { accessToken === '' ?
            <RouteLoader /> :
            <Page>
                <Header onMenuClick={ openDrawer } />
                <MainSection>
                    <ResponsiveDrawer
                        sx={{
                            width: 240,
                            flexShrink: 0
                        }}
                        variant={ windowDimensions === WindowDimensions.Large ? 'permanent' : 'temporary' }
                        open={ isDrawerOpen }
                        onClose={ onDrawerClose }
                        onOpen={ onDrawerOpen } >
                        <SideNavigation activePage={ activePage } />
                    </ResponsiveDrawer>
                    <ChildrenContainer>
                        { children }
                    </ChildrenContainer>
                </MainSection>
            </Page>}
        </Container>
    )
}

export { PageContainer }