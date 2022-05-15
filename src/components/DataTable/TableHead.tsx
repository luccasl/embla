import { useCallback, useContext } from "react"
import { SortingContext, SortingContextType, } from "./SortingContext"
import { TableHeadContainer } from "./TableHeadContainer"
import { TableHeading } from "./TableHeading"

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