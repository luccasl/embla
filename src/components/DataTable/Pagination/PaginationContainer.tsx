import styled from "styled-components"
import { media } from "../../../styles/responsive"

const PaginationContainer = styled.div`
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.8rem 0;

    ${media.desktop} {
        justify-content: flex-end;
    }
`

export { PaginationContainer }