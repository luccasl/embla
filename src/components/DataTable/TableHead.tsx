import { useCallback } from "react"
import styled from "styled-components"
import { media } from "../../styles/responsive"

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

    th {
        flex: 1;
        font-size: 1rem;
        margin: 0 1rem;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    th:hover {
        color: #bd559c;
        cursor: pointer;
    }

    th:not(:nth-child(-n + 2)) {
        display: none;
    }

    ${media.tablet} {
        th:not(:nth-child(-n + 3)) {
        display: none;
        }

        th:nth-child(-n + 3) {
        display: table-cell;
        }
    }

    ${media.desktop} {
        th:nth-child(-n + 3),
        th:not(:nth-child(-n + 3)) {
        display: table-cell;
        }
    }
`

const TableHead: React.FC<{
    onClickHeading?: (headingName: string) => void,
    headings: any[]
}> = ({
    onClickHeading,
    headings = []
}) => {
        const renderHeadings = useCallback(() =>
            headings.map((heading: any, index: number) => {
                const {
                    name,
                    title,
                } = heading

                return (
                    <th
                        key={index}
                        onClick={() => onClickHeading && onClickHeading(name)} >
                        {title}
                    </th>
                )

            })
            , [headings,])

        return (
            <TableHeadContainer>
                <tr>
                    {renderHeadings()}
                </tr>
            </TableHeadContainer>
        )
    }

export { TableHead }