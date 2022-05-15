import styled from "styled-components";
import { media } from "../../styles/responsive";

type TableCellProps = {
    large?: boolean,
}

const TableCell = styled.td<TableCellProps>`
    flex: ${props => props.large ? 2 : 1};
    vertical-align: top;
    text-align: ${props => props.align};
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    margin: 0 1rem; 

    &:not(:nth-child(-n + 2)) {
        display: none;
    }

    ${media.tablet} {
        &:not(:nth-child(-n + 3)) {
        display: none;
        }

        &:nth-child(-n + 3) {
        display: table-cell;
        }
    }

    ${media.desktop} {
        &:nth-child(-n + 3),
        &:not(:nth-child(-n + 3)) {
        display: table-cell;
        }
    }
`

export type { TableCellProps }

export { TableCell }