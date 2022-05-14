import { useContext } from "react"

import { SearchContext, SearchContextType } from "./SearchContext"
import { StyledMdClose } from "./StyledMdClose"

const CloseIcon: React.FC = () => {
    const { setQuery } = useContext(SearchContext) as SearchContextType

    const clearQuery = () => {
        setQuery('')
    }

    return (
        <StyledMdClose
            onClick={clearQuery}
            size={21} />
    )
}

export { CloseIcon }