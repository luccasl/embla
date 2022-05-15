import React, { createContext, useState } from "react"

type SortingContextType = {
    sortedHeading: string
    setSortedHeading: (heading: string) => void
}

const SortingContext = createContext<SortingContextType | null>(null)

const SortingProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [sortedHeading, setSortedHeading] = useState<string>('')

    return (
        <SortingContext.Provider value={{
            sortedHeading,
            setSortedHeading
        }}>
            {children}
        </SortingContext.Provider>
    )
}

export type { SortingContextType }

export { SortingContext, SortingProvider }