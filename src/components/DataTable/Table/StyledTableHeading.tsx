import { lighten } from "@mui/material"
import styled from "styled-components"

import { media } from '../../../styles/responsive'

type StyledTableHeadingProps = {
    large?: boolean
}

const StyledTableHeading = styled.th<StyledTableHeadingProps>`
    flex: ${props => props.large ? 2 : 1};
    font-size: 1rem;
    margin: 0 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: ${props => props.align};
    justify-content: ${props => props.align};
    align-items: center;

    &:hover {
        color: ${props => lighten(props.theme.colors.primary, 0.2)};
        cursor: pointer;
    }

    &:not(:nth-child(-n + 2)) {
        display: none;
    }

    ${media.tablet} {
        &:not(:nth-child(-n + 3)) {
            display: none;
        }

        &:nth-child(-n + 3) {
            display: flex;
        }
    }

    ${media.desktopSmall} {
        &:not(:nth-child(-n + 4)) {
            display: none;
        }

        &:nth-child(-n + 4) {
            display: flex;
        }
    }

    ${media.desktop} {
        &:nth-child(-n + 3),
        &:not(:nth-child(-n + 3)) {
            display: flex;
        }
    }
`

export type { StyledTableHeadingProps }

export { StyledTableHeading }