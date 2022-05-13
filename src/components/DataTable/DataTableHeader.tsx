import { MdFilterAlt, MdSearch } from "react-icons/md"
import { HeaderButton } from "./HeaderButton"
import { SearchBar } from "./SearchBar"

const DataTableHeader: React.FC = () => {
    return (
        <div className="datatable-header">
            <HeaderButton>
                <MdFilterAlt size={21} />
            </HeaderButton>
            <SearchBar />
        </div>
    )
}

export { DataTableHeader }