import React, { memo } from "react"
import { TableBodyContainer } from "./TableBodyContainer"

const TableBodyComponent: React.FC<{
    rows: any[],
    renderRow: (row: any) => React.ReactElement,
}> = ({
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