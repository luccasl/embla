import styled from "styled-components"
import { SearchBar } from "./SearchBar"

const DataTableHeaderContainer = styled.div`
    height: 3rem;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    padding: 0.8rem 1rem;
    align-items: center;
`

const DataTableHeader: React.FC = () => {
    return (
        <DataTableHeaderContainer>
            <SearchBar />
        </DataTableHeaderContainer>
    )
}

export { DataTableHeader }