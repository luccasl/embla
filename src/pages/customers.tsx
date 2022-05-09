import { NextPage } from "next"
import { useCallback, useContext, useEffect, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import useGetCustomers from "../lib/hooks/useGetCustomers"
import { parseISO } from "date-fns"
import { DataGrid } from "@mui/x-data-grid"
import { formatCpfCnpj } from "../lib/utils/formatCpfCnpj"
import { PageContainer } from "../components/PageContainer"
import { PageIndices } from "../lib/constants/pageIndices"

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Customers: NextPage = () => {
    const themeContext = useContext(ThemeContext)

    const customers = useGetCustomers()

    return <Container>
        <PageContainer activePage={ PageIndices.Customers }>
            { customers.length > 0 &&
                <div style={{ margin: '0 auto', maxWidth: '60rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h1>
                        Clientes
                    </h1>
                    <div style={{ flex: 1, backgroundColor: themeContext.colors.light }}>
                        <DataGrid
                            rows={ customers }
                            columns={ Object.keys(customers[0]).map(column => ({
                                field: column,
                                headerName: column.replace(/^./, char => char.toUpperCase()),
                                width: 150,
                            })) } />
                    </div>
                </div>
            }
        </PageContainer>
    </Container>
}

export default Customers