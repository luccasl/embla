import styled from "styled-components";

type OverlayProps = {
    enabled: boolean
}

const Overlay = styled.div<OverlayProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: -1;
    opacity: ${props => props.enabled ? 1 : 0};

    transition-property: opacity;
    transition-duration: 200ms;
`

export { Overlay }