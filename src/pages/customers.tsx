import { NextPage } from "next"
import { useCallback, useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import useGetCustomers from "../lib/hooks/useGetCustomers"
import { parseISO } from "date-fns"
import { formatCpfCnpj } from "../lib/utils/formatCpfCnpj"
import { PageContainer } from "../components/PageContainer"
import { PageIndices } from "../lib/constants/pageIndices"
import { DataTable } from "../components/DataTable"

const headings = [
    {
      name: "nome",
      title: "Nome"
    },
    {
      name: "data",
      title: "Data"
    },
    {
      name: "documento",
      title: "Documento"
    },
    {
      name: "banco",
      title: "Banco"
    },
    {
      name: "agencia",
      title: "Agencia"
    },
    {
      name: "conta",
      title: "Conta"
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

    const renderCustomersRow = (customer: any, index: number) => {
        const data = parseISO(customer.data).toLocaleDateString();
        const documento = formatCpfCnpj(customer.documento)

        return (
            <tr key={ index }>
                <td>{customer.nome}</td>
                <td>{data}</td>
                <td>{documento}</td>
                <td>{customer.banco}</td>
                <td>{customer.agencia}</td>
                <td>{customer.conta}</td>
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