import React from "react"
import styled from "styled-components"

const TableBodyContainer = styled.tbody`
    
`

const TableBody: React.FC<{
    rows: any[]
    renderRow: (row: any) => React.ReactElement,
}> = ({
    rows = [],
    renderRow,
}) => {
    const renderRows = () =>
        rows.map((row: any, index: number) => renderRow(row))

    return (
        <TableBodyContainer>
            {renderRows()}
        </TableBodyContainer>
    )
}

export { TableBody }