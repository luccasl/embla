import styled from "styled-components";

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

export { TableHeadContainer }