import { DataTable } from './DataTable'
import { SearchProvider } from './SearchContext'

type DataTablePropsType = {
    rows: any[]
    renderRow: (row: any) => React.ReactElement
}

const DataTableContainer: React.FC<DataTablePropsType> = (props) => {
    return (
        <SearchProvider>
            <DataTable {...props} />
        </SearchProvider>
    )
}

export { DataTableContainer as DataTable }