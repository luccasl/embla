import { ChangeEvent, useMemo } from "react"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

import { ComboBox } from "./ComboBox"
import { DesktopPaginationElement } from "./DesktopPaginationElement"
import { usePagination } from "./hooks/usePagination"
import { PaginationContainer } from "./PaginationContainer"
import { PaginationElement } from "./PaginationElement"

const Pagination: React.FC<{
    rows: any[]
}> = ({
    rows,
}) => {
    const {
        numberOfRows,
        page,
        setPage,
        goToNextPage,
        goToPreviousPage,
        setNumberOfRows
    } = usePagination(rows.length)

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setNumberOfRows(parseInt(event.target.value))
    }

    const currentIndex = page * numberOfRows
    const rowCount = rows.length

    const currentPage = useMemo(() =>
        currentIndex + 1, [currentIndex])

    const numberOfDisplayedRows = useMemo(() =>
        Math.min(currentIndex + numberOfRows, rowCount),
        [currentIndex, numberOfRows, rowCount])

    const paginationInfoText = `${currentPage} - ${numberOfDisplayedRows} de ${rowCount}`;

    return (
        <PaginationContainer>
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
            <DesktopPaginationElement>
            <p>
                { paginationInfoText }
            </p>
            </DesktopPaginationElement>
            <PaginationElement onClick={goToPreviousPage}>
                <MdChevronLeft size={21} />
            </PaginationElement>
            <PaginationElement onClick={goToNextPage}>
                <MdChevronRight size={21} />
            </PaginationElement>
        </PaginationContainer>
    )
}

export { Pagination }