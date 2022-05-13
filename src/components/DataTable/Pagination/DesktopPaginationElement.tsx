import styled from "styled-components";
import { media } from "../../../styles/responsive";
import { PaginationElement } from "./PaginationElement";

const DesktopPaginationElement = styled(PaginationElement)`
  display: none;

  ${media.tablet} {
    display: flex;
  }
`

export { DesktopPaginationElement }