import { NextPage } from "next"
import { useCallback, useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import useGetCustomers from "../lib/hooks/useGetCustomers"
import { parseISO } from "date-fns"
import { formatCpfCnpj } from "../lib/utils/formatCpfCnpj"
import { PageContainer } from "../components/PageContainer"
import { PageIndices } from "../lib/constants/pageIndices"
import { DataTable } from "../components/DataTable"
import { TableCell } from "../components/DataTable/TableCell"

const headings = [
    {
      name: 'nome',
      title: 'Nome',
      large: true,
    },
    {
      name: 'data',
      title: 'Data',
      align: 'right',
    },
    {
      name: 'documento',
      title: 'Documento',
      large: true,
      align: 'right',
    },
    {
      name: 'banco',
      title: 'Banco',
      large: true,
    },
    {
      name: 'agencia',
      title: 'Agencia',
      align: 'right',
    },
    {
      name: 'conta',
      title: 'Conta',
      align: 'right',
    },
]

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Customers: NextPage = () => {
    const customers = useGetCustomers()

    const renderCustomersRow = (customer: any) => {
        const data = parseISO(customer.data).toLocaleDateString();
        const documento = formatCpfCnpj(customer.documento)

        return (
            <tr key={ customer.documento }>
                <TableCell large>{customer.nome}</TableCell>
                <TableCell align='right'>{data}</TableCell>
                <TableCell large align='right'>{documento}</TableCell>
                <TableCell large>{customer.banco}</TableCell>
                <TableCell align='right'>{customer.agencia}</TableCell>
                <TableCell align='right'>{customer.conta}</TableCell>
            </tr>
        )
    }

    return <Container>
        <PageContainer activePage={ PageIndices.Customers }>
            { customers.length > 0 &&
                <div style={{ overflow: 'hidden', margin: '0 auto', maxWidth: '70rem', display: 'flex', flexDirection: 'column', flex: 1, }}>
                    <h1>
                        Clientes
                    </h1>
                    <DataTable
                        headings={ headings }
                        rows={ customers }
                        renderRow={ renderCustomersRow } />
                </div>
            }
        </PageContainer>
    </Container>
}

export default Customers