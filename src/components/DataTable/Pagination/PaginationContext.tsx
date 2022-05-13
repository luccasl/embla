import { createContext, useState } from "react";

type PaginationContextType = {
    numberOfRows: number
    setNumberOfRows: (value: number) => void
    page: number
    setPage: (page: number) => void
}

const PaginationContext = createContext<PaginationContextType | null>(null)

const PaginationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [ numberOfRows, setNumberOfRows ] = useState<number>(25)
    const [ page, setPage ] = useState<number>(0)

    return (
        <PaginationContext.Provider value={{
            numberOfRows,
            setNumberOfRows,
            page,
            setPage,
        }}>
            { children }
        </PaginationContext.Provider>
    )
}

export type { PaginationContextType }

export { PaginationContext, PaginationProvider }