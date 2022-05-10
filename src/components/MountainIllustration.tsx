import styled from "styled-components"
import { media } from "../styles/responsive"

const MountainIllustration = styled.img`
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    
    ${media.tablet} {
        background-image: url('illustrations/mountains-tablet.svg');
    }

    ${media.desktop} {
        background-image: url('illustrations/mountains-desktop.svg');
    }

    width: 100%;
    height: 100%; 
    position: absolute;
    bottom: 0;
    left: 0;
`
export { MountainIllustration }