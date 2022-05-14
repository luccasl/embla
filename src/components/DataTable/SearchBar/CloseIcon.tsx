import { useContext } from "react"
import { MdClose } from "react-icons/md"
import styled from "styled-components"
import { SearchContext, SearchContextType } from "./SearchContext"

const StyledMdClose = styled(MdClose)`
    z-index: 30;

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.bold}
    }
`

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