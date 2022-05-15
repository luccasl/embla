import { useCallback, useContext } from "react"
import styled from "styled-components"
import { SortingContext, SortingContextType, SortingProvider } from "./SortingContext"
import { TableHeading } from "./TableHeading"

const TableHeadContainer = styled.thead`
    width: 100%;
    display: block;

    tr {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid #dfdfdf;
    }
`

const TableHead: React.FC<{
    onClickHeading?: (headingName: string) => void,
    headings: any[]
}> = ({
    onClickHeading = (heading: string) => null,
    headings = []
}) => {
        const { setSortedHeading } = useContext(SortingContext) as SortingContextType

        const handleHeadingClick = (heading: string) => {
            setSortedHeading(heading)

            onClickHeading(heading)
        }

        const renderHeadings = useCallback(() =>
            headings.map((heading: any) => {
                const {
                    name,
                    title,
                    large,
                    align,
                } = heading

                return (
                    <TableHeading
                        key={name}
                        name={name}
                        title={title}
                        large={large}
                        align={align}
                        onClick={() => handleHeadingClick(name)} />
                )
            })
            , [headings, onClickHeading])

        return (
            <TableHeadContainer>
                <tr>
                    {renderHeadings()}
                </tr>
            </TableHeadContainer>
        )
    }

export { TableHead }