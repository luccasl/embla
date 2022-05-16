import { NextPage } from "next"
import styled from "styled-components"
import { parseISO } from "date-fns"

import useGetCustomers from "../lib/hooks/useGetCustomers"
import { formatCpfCnpj } from "../lib/utils/formatCpfCnpj"
import { PageContainer } from "../components/PageContainer"
import { PageIndices } from "../lib/constants/pageIndices"
import { DataTable } from "../components/DataTable"
import { TableCell } from "../components/DataTable/Table"
import { Modal } from "../components/Modal"
import { useAppSelector, useAppDispatch } from "../lib/store/hooks"
import { setSelectedCustomer } from '../lib/reducers/customersReducer'
import { CustomerInfo } from "../components/Customers/CustomerInfo"
import { useState } from "react"

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
    const dispatch = useAppDispatch()

    const customers = useGetCustomers()

    const {selectedCustomer} = useAppSelector(state => state.customers)

    const [showModal, setShowModal] = useState<boolean>(false)

    const renderCustomersRow = (customer: any) => {
        const data = parseISO(customer.data).toLocaleDateString();
        const documento = formatCpfCnpj(customer.documento)

        return (
            <tr
              key={ customer.documento }
              onClick={() => selectCustomer(customer)}>
                <TableCell large>{customer.nome}</TableCell>
                <TableCell align='right'>{data}</TableCell>
                <TableCell large align='right'>{documento}</TableCell>
                <TableCell large>{customer.banco}</TableCell>
                <TableCell align='right'>{customer.agencia}</TableCell>
                <TableCell align='right'>{customer.conta}</TableCell>
            </tr>
        )
    }

    const selectCustomer = (customer: any) => {
      dispatch(setSelectedCustomer(customer))
      setShowModal(true)
    }

    const closeModal = () => {
      setShowModal(false)
    }

    return <Container>
        <Modal
          enabled={showModal}
          title='Detalhes do cliente'
          onClickClose={closeModal}>
          {selectedCustomer &&
          <CustomerInfo customer={selectedCustomer} /> }
        </Modal>
        <PageContainer activePage={ PageIndices.Customers }>
          <div style={{ overflow: 'hidden', margin: '0 auto', maxWidth: '70rem', display: 'flex', flexDirection: 'column', flex: 1, }}>
            <h1>
                Clientes
            </h1>
            <DataTable
                headings={ headings }
                rows={ customers }
                renderRow={ renderCustomersRow } />
          </div>
        </PageContainer>
    </Container>
}

export default Customers