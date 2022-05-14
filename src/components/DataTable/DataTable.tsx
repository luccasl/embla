import React, { useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { sanitizeRegexString } from "../../lib/utils/sanitize"
import { TableHead } from "./TableHead"
import { SearchContext, SearchContextType } from "./SearchBar"
import { DataTableHeader } from "./DataTableHeader"
import { PaginationContext, PaginationContextType } from "./Pagination"
import { Pagination } from "./Pagination/Pagination"
import { TableBody } from "./TableBody"
import { DataTableFrame } from "./DataTableFrame"
import { Table } from "./Table"

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
`;

const DataTable: React.FC<{
  headings: any[],
  rows: any[],
  renderRow: (row: any) => React.ReactElement,
}> = ({
  headings = [],
  rows = [],
  renderRow,
}) => {
  const {query, } = useContext(SearchContext) as SearchContextType

  const {
    numberOfRows,
    setNumberOfRows,
    page,
    setPage,
  } = useContext(PaginationContext) as PaginationContextType

  const [filteredRows, setFilteredRows] = useState<any[]>(rows)

  const filteredRowsRef = useRef<any[]>([])
  filteredRowsRef.current = filteredRows

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

  function sortRows (columnName: string) {
    let sortedArray = [...filteredRowsRef.current]
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

  return (
      <Container>
        <DataTableFrame>
          <DataTableHeader />
          <Table>
            <TableHead onClickHeading={ sortRows } headings={ headings } />
            <TableBody rows={ paginatedRows } renderRow={ renderRow } />
          </Table>
          <Pagination
            rows={ filteredRows } />
        </DataTableFrame>
      </Container>
  )
}

export { DataTable }