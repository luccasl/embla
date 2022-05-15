import { DataTable } from './DataTable'
import { PaginationProvider } from './Pagination'
import { SearchProvider } from './SearchBar'
import { SortingProvider } from './SortingContext'

type DataTablePropsType = {
    headings: any[],
    rows: any[]
    renderRow: (row: any) => React.ReactElement
}

const DataTableContainer: React.FC<DataTablePropsType> = (props) => {
    return (
        <SearchProvider>
            <PaginationProvider>
                <SortingProvider>
                    <DataTable {...props} />
                </SortingProvider>
            </PaginationProvider>
        </SearchProvider>
    )
}

export { DataTableContainer as DataTable }