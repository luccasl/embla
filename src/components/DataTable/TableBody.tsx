import React, { memo, useEffect } from "react"
import styled from "styled-components"
import { media } from "../../styles/responsive"
import { lighten } from "@mui/material"

const TableBodyContainer = styled.tbody`
    display: block;
    width: 100%;
    overflow: overlay;
    flex: 1;
    border-bottom: 1px solid #dfdfdf;

    &::-webkit-scrollbar {
        width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.border};
        border: 1px solid #eae4ff;
        border-radius: 1rem;
    }

    tr {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1.5rem 2rem;
    }

    & > tr:not(:last-child) {
        border-bottom: 1px solid ${props => lighten(props.theme.colors.border, 0.5)};
    }

    & > tr:hover {
        background-color: ${props => lighten(props.theme.colors.primary, 0.8)};
    }

    & > tr:nth-child(even) {
        background-color: #fafafa;

        &:hover {
            background-color: ${props => lighten(props.theme.colors.primary, 0.8)};
        }
    }
`

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