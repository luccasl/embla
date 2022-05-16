import styled from "styled-components";
import { media } from "../../styles/responsive";

type ModalContainerProps = {
    enabled: boolean
}

const ModalContainer = styled.div<ModalContainerProps>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    z-index: 100;
    display: flex;

    pointer-events: ${props => props.enabled ? 'all': 'none'};

    @media (orientation: landscape) {
        height: 100vw;
    }

    ${media.tablet} {
        @media (orientation: landscape) {
            height: 100%;
        }
    }
`

export { ModalContainer }