import { useContext, useState } from "react"
import { MdArrowDownward } from "react-icons/md"
import { SortingContext, SortingContextType } from "./SortingContext"

import { StyledTableHeading } from "./StyledTableHeading"

type Align = 'left' | 'center' | 'right' | 'justify' | 'char' | undefined

type TableHeadingProps = {
    name: string
    title?: string
    onClick?: () => void
    large?: boolean
    align?: Align
}

const TableHeading: React.FC<TableHeadingProps> = ({
    name,
    title = '',
    onClick = () => null,
    large = false,
    align = 'left',
}) => {
    const { sortedHeading } = useContext(SortingContext) as SortingContextType

    const shouldSort: boolean = sortedHeading === name

    const renderSortIcon = () => {
        if (shouldSort) {
            return (
                <MdArrowDownward size={21} />
            )
        }
    }

    const handleClick = () => {
        if (shouldSort) {
            return
        }

        onClick()
    }

    return (
        <StyledTableHeading
            onClick={handleClick}
            large={large}
            align={align} >
            {renderSortIcon()}
            {title}
        </StyledTableHeading>
    )
}

export type { TableHeadingProps }

export { TableHeading }