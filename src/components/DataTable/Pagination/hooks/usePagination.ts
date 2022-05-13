import { useContext } from "react"
import { PaginationContext, PaginationContextType } from "../PaginationContext"

type UsePaginationReturnProps = {
    numberOfRows: number
    page: number
    setPage: (pageIndex: number) => void
    goToNextPage: () => void
    goToPreviousPage: () => void
    setNumberOfRows: (newNumberOfRows: number) => void
}

function usePagination(totalRowCount: number): UsePaginationReturnProps {
    const {
        numberOfRows,
        setNumberOfRows,
        page,
        setPage,
    } = useContext(PaginationContext) as PaginationContextType

    const goToNextPage = () => {
        if (page * numberOfRows + numberOfRows >= totalRowCount) {
          return
        }
    
        setPage(page + 1);
      }
    
    const goToPreviousPage = () => {
        if (page < 1) {
            return
        }

        setPage(page - 1)
    }

    return {
        numberOfRows,
        page,
        setPage,
        goToNextPage,
        goToPreviousPage,
        setNumberOfRows,
    }
}

export type { UsePaginationReturnProps }

export { usePagination }