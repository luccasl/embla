import React, { ChangeEvent, useContext, useEffect, useState } from "react"
import styled from "styled-components"
import {
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md"
import { sanitizeRegexString } from "../../lib/utils/sanitize"
import { TableHead } from "./TableHead"
import { ComboBox } from "./ComboBox"
import { SearchContext, SearchContextType } from "./SearchContext"
import { DataTableHeader } from "./DataTableHeader"

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
`;

const Table = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 0.25rem;
  box-sizing: border-box;
  max-width: 100%;

  table {
    border-collapse: collapse;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }

  td {
    font-size: 1rem;
    margin: 0 1rem;
  }

  tbody > tr:not(:last-child) {
    border-bottom: 1px solid #dfdfdf;
  }

  tbody > tr:hover {
    background-color: #eae4ff;
    cursor: pointer;
  }

  td {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  tbody > tr:nth-child(even) {
    background-color: #fafafa;

    &:hover {
      background-color: #eae4ff;
      cursor: pointer;
    }
  }

  tbody,
  tr {
    display: block;
  }

  tbody {
    width: 100%;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 2rem;
  }

  tbody {
    overflow: overlay;
    flex: 1;
    border-bottom: 1px solid #dfdfdf;
  }

  td:not(:nth-child(-n + 2)) {
    display: none;
  }

  @media (min-width: 10rem) {
    td:not(:nth-child(-n + 2)) {
      display: none;
    }

    td:nth-child(-n + 2) {
      display: table-cell;
    }
  }

  @media (min-width: 30rem) {
    td:not(:nth-child(-n + 3)) {
      display: none;
    }

    td:nth-child(-n + 3) {
      display: table-cell;
    }
  }

  @media (min-width: 50rem) {
    td:nth-child(-n + 3),
    td:not(:nth-child(-n + 3)) {
      display: table-cell;
    }
  }

  .datatable-header {
    height: 3rem;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    padding: 0.8rem 0.25rem;
    align-items: center;
  }

  .datatable-pagination {
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.8rem 0;

    @media (min-width: 50rem) {
      justify-content: flex-end;
    }
  }

  tbody::-webkit-scrollbar {
    width: 0.8rem;
  }

  tbody::-webkit-scrollbar-thumb {
    background-color: #8a8fff;
    border: 1px solid #eae4ff;
    border-radius: 1rem;
  }
`;

const PaginationElement = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.25rem;

  @media (min-width: 30rem) {
    padding: 0 1rem;
  }

  &:hover {
    cursor: pointer;
  }

  svg {
    fill: #777;
  }

  svg:hover {
    fill: #000;
  }

  p {
    color: #777;
    margin: 0;
    flex: 1;
  }
`

const DesktopPaginatedElement = styled(PaginationElement)`
  display: none;

  @media (min-width: 25rem) {
    display: flex;
  }
`

const DataTable: React.FC<{
  rows: any[],
  renderRow: (row: any) => React.ReactElement,
}> = ({
  rows = [],
  renderRow,
}) => {
  const {query, } = useContext(SearchContext) as SearchContextType

  const [numberOfRows, setNumberOfRows] = useState<number>(25)
  const [page, setPage] = useState<number>(0)
  const [filteredRows, setFilteredRows] = useState<any[]>(rows)

  useEffect(() => {
    setPage(0)
  }, [query, numberOfRows])

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredRows(rows)
    }

    setFilteredRows(
      rows.filter((row: any) => {
        const sanitizedQuery = sanitizeRegexString(query)
        const queryKeywords = sanitizedQuery.split(" ")
        let queryRegexString = queryKeywords.join(")(?=.*")
        queryRegexString = `(?=.*${queryRegexString})`

        const columns = Object.values(row)
        const columnsCombined = columns.join("")

        const queryRegexp = new RegExp(queryRegexString, "i")
        return queryRegexp.exec(columnsCombined)
      })
    );
  }, [query])

  const currentIndex = page * numberOfRows
  const paginatedRows = filteredRows.slice(
    currentIndex,
    currentIndex + numberOfRows
  )

  const sortRows = (columnName: string) => {
    let sortedArray = [...filteredRows];
    sortedArray.sort((a: any, b: any) =>
      !isNaN(parseInt(a[columnName]))
        ? parseInt(a[columnName]) > parseInt(b[columnName])
          ? 1
          : -1
        : a[columnName].toString() > b[columnName].toString()
        ? 1
        : -1
    )

    setFilteredRows(sortedArray)
  }

  const renderRows = () =>
    paginatedRows.map((row: any, index: number) => renderRow(row))

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setNumberOfRows(parseInt(event.target.value))
  }

  const nextPage = () => {
    const rowCount = filteredRows.length;
    if (page * numberOfRows + numberOfRows >= rowCount) {
      return
    }

    setPage(page + 1);
  }

  const previousPage = () => {
    if (page < 1) {
      return
    }

    setPage(page - 1)
  }

  const rowCount = filteredRows.length

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

  return (
      <Container>
        <Table>
          <DataTableHeader />
          <table>
            <TableHead onClickHeading={sortRows} headings={headings} />
            <tbody>{renderRows()}</tbody>
          </table>
          <div className="datatable-pagination">
            <PaginationElement>
              <ComboBox>
                <label htmlFor="rows-per-page">Linhas por página</label>
                <select id="rows-per-page" onChange={onChangeSelect}>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </ComboBox>
            </PaginationElement>
            <DesktopPaginatedElement>
              <p>
                {currentIndex + 1} -{" "}
                {Math.min(currentIndex + numberOfRows, rowCount)} de {rowCount}
              </p>
            </DesktopPaginatedElement>
            <PaginationElement onClick={previousPage}>
              <MdChevronLeft size={21} />
            </PaginationElement>
            <PaginationElement onClick={nextPage}>
              <MdChevronRight size={21} />
            </PaginationElement>
          </div>
        </Table>
      </Container>
  )
}

export { DataTable }