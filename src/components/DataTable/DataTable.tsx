import React, {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react"

import { sanitizeRegexString } from "../../lib/utils/sanitize"
import { SearchContext, SearchContextType } from "./SearchBar"
import { DataTableHeader } from "./DataTableHeader"
import { PaginationContext, PaginationContextType } from "./Pagination"
import { Pagination } from "./Pagination/Pagination"
import { Table, TableBody, TableHead } from "./Table"
import { DataTableFrame } from "./DataTableFrame"
import { SortingContext, SortingContextType } from "./SortingContext"
import { DataTableContainer } from "./DataTableContainer"
import { compareAny } from "../../lib/utils/sort"

type DataTableProps = {
  headings: any[]
  rows: any[]
  renderRow: (row: any) => React.ReactElement
}

const DataTable: React.FC<DataTableProps> = ({
  headings = [],
  rows = [],
  renderRow,
}) => {
  const { query, } = useContext(SearchContext) as SearchContextType

  const {
    numberOfRows,
    page,
    setPage,
  } = useContext(PaginationContext) as PaginationContextType

  const {
    setSortedHeading,
  } = useContext(SortingContext) as SortingContextType

  const [filteredRows, setFilteredRows] = useState<any[]>(rows)

  const filteredRowsRef = useRef<any[]>([])
  filteredRowsRef.current = filteredRows

  useEffect(() => {
    setPage(0)
  }, [query, numberOfRows, setPage])

  useEffect(() => {
    setSortedHeading('')

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
  }, [query, rows, setSortedHeading])

  const currentIndex = page * numberOfRows
  const paginatedRows = useMemo(() => filteredRows.slice(
    currentIndex,
    currentIndex + numberOfRows
  ), [currentIndex, filteredRows, numberOfRows])

  function sortRows(columnName: string) {
    let sortedArray = [...filteredRowsRef.current]
    sortedArray.sort((row: any, nextRow: any) => {
      const cell = row[columnName]
      const nextCell = nextRow[columnName]

      return compareAny(cell, nextCell)
    })

    setFilteredRows(sortedArray)
  }

  return (
    <DataTableContainer>
      <DataTableFrame>
        <DataTableHeader />
        <Table>
          <TableHead onClickHeading={sortRows} headings={headings} />
          <TableBody rows={paginatedRows} renderRow={renderRow} />
        </Table>
        <Pagination
          rows={filteredRows} />
      </DataTableFrame>
    </DataTableContainer>
  )
}

export { DataTable }