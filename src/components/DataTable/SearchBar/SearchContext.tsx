import React from 'react'
import { createContext, useState } from "react"

type SearchContextType = {
    query: string,
    setQuery: (query: string) => void,
}

const SearchContext = createContext<SearchContextType | null>(null)

const SearchProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [query, setQuery] = useState<string>('')

    return (
        <SearchContext.Provider value={{ query, setQuery }}>
            { children }
        </SearchContext.Provider>
    )
}

export { SearchContext, SearchProvider }
export type { SearchContextType }