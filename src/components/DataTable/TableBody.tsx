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
        cursor: pointer;
    }

    & > tr:nth-child(even) {
        background-color: #fafafa;

        &:hover {
            background-color: ${props => lighten(props.theme.colors.primary, 0.8)};
            cursor: pointer;
        }
    }

    td {
        flex: 1;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1rem;
        margin: 0 1rem;
    }

    td:not(:nth-child(-n + 2)) {
        display: none;
    }

    ${media.tablet} {
        td:not(:nth-child(-n + 3)) {
        display: none;
        }

        td:nth-child(-n + 3) {
        display: table-cell;
        }
    }

    ${media.desktop} {
        td:nth-child(-n + 3),
        td:not(:nth-child(-n + 3)) {
        display: table-cell;
        }
    }
`

const TableBodyComponent: React.FC<{
    rows: any[],
    renderRow: (row: any, index: number) => React.ReactElement,
}> = ({
    rows = [],
    renderRow,
}) => {
    const renderRows = () => {
        console.log('Render rows')
        return rows.map((row: any, index: number) => renderRow(row, index))
    }

    return (
        <TableBodyContainer>
            {renderRows()}
        </TableBodyContainer>
    )
}

const TableBody = memo(TableBodyComponent)

export { TableBody }