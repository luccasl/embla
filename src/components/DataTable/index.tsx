import { DataTable } from './DataTable'
import { PaginationProvider } from './Pagination'
import { SearchProvider } from './SearchBar'

type DataTablePropsType = {
    headings: any[],
    rows: any[]
    renderRow: (row: any, index: number) => React.ReactElement
}

const DataTableContainer: React.FC<DataTablePropsType> = (props) => {
    return (
        <SearchProvider>
            <PaginationProvider>
                <DataTable {...props} />
            </PaginationProvider>
        </SearchProvider>
    )
}

export { DataTableContainer as DataTable }