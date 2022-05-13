import { MdFilterAlt } from "react-icons/md"
import styled from "styled-components"
import { HeaderButton } from "./HeaderButton"
import { SearchBar } from "./SearchBar"

const DataTableHeaderContainer = styled.div`
    height: 3rem;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    padding: 0.8rem 0.25rem;
    align-items: center;
`

const DataTableHeader: React.FC = () => {
    return (
        <DataTableHeaderContainer>
            <HeaderButton>
                <MdFilterAlt size={21} />
            </HeaderButton>
            <SearchBar />
        </DataTableHeaderContainer>
    )
}

export { DataTableHeader }