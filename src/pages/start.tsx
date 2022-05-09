import { NextPage } from "next";
import { PageContainer } from "../components/PageContainer";
import { PageIndices } from "../lib/constants/pageIndices";
import useProtectedRoute from "../lib/hooks/useProtectedRoute";

const Start: NextPage = () => {
    useProtectedRoute()

    return (
        <PageContainer activePage={ PageIndices.Home }>

        </PageContainer>
    )
}

export default Start