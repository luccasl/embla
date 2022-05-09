import { NextPage } from "next";
import styled from "styled-components";
import { PageContainer } from "../components/PageContainer";
import { PageIndices } from "../lib/constants/pageIndices";
import useProtectedRoute from "../lib/hooks/useProtectedRoute";

const Container = styled.div`
    height: 100%;
    width: 100%;
`

const Start: NextPage = () => {
    useProtectedRoute()

    return (
        <PageContainer activePage={ PageIndices.Home }>
            <Container>

            </Container>
        </PageContainer>
    )
}

export default Start