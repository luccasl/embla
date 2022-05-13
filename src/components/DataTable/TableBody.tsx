import React from "react"
import styled from "styled-components"
import { media } from "../../styles/responsive"

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
        background-color: #8a8fff;
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
        border-bottom: 1px solid #dfdfdf;
    }

    & > tr:hover {
        background-color: #eae4ff;
        cursor: pointer;
    }

    & > tr:nth-child(even) {
        background-color: #fafafa;

        &:hover {
            background-color: #eae4ff;
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