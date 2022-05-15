import React, { memo } from "react"
import { TableBodyContainer } from "./TableBodyContainer"

type TableBodyComponentProps = {
    rows: any[]
    renderRow: (row: any) => React.ReactElement
}

const TableBodyComponent: React.FC<TableBodyComponentProps> = ({
    rows = [],
    renderRow,
}) => {
    const renderRows = () => (
        rows.map((row: any) => renderRow(row))
    )

    return (
        <TableBodyContainer>
            {renderRows()}
        </TableBodyContainer>
    )
}

const TableBody = memo(TableBodyComponent)

export { TableBody }