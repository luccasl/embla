import styled from "styled-components"
import { media } from "../../../styles/responsive"

const PaginationElement = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.25rem;

  ${media.tablet} {
    padding: 0 1rem;
  }

  &:hover {
    cursor: pointer;
  }

  svg {
    fill: #777;
  }

  svg:hover {
    fill: #000;
  }

  p {
    color: #777;
    margin: 0;
    flex: 1;
  }
`

export { PaginationElement }